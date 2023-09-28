//***************************** */
const express = require("express")
const app = express.Router()
//***************************** */

app.use(express.json())

const jwt = require('jsonwebtoken');



const bcryptjs = require('bcryptjs');

const expressAsyncHandler = require("express-async-handler")

const middleware1= (request,response,next)=>{
    //console.log(request.body());
//
  console.log(request.params);
  let userId=request.params.id;
  if(userId==100) next()
  else response.send("User not exist")
    
    //response.send({Message:"Unauthorised User"})
}


//using the middleware
 
//app.use(middleware1)

//creat user API

app.get('/users/:id',async(req,res)=>{
    let userId = req.params.id
    const db = req.app.get("userCollection");
    const userObj =await db.findOne({userName:userId})
 res.send({Message:"Data of the users", payload: userObj})
    
   
})  


app.put('/updateLeaves/:id', expressAsyncHandler( async(req,res)=>{
    const db = req.app.get("leavesCollection");
    const usersDb = req.app.get("userCollection");
    let id = req.params.id, status = req.body.newstatus, newLeaves = req.body.obj.leaveRemaining, reqLeaves = req.body.obj.days;
    if(status==='Granted'){
        newLeaves -= reqLeaves;
        console.log("req.body")
        await usersDb.updateOne({mail: req.body.obj.mail},{$set:{leaveRemaining:newLeaves, leaveUsed : 24 - newLeaves}})
    }
    const u=  await db.updateOne({_id:new ObjectId(id)},{$set:{status:req.body.newstatus}})
    res.send("yo");

}))




app.get('/users',expressAsyncHandler(async(req,res)=>{
   const db = req.app.get("userCollection");
   const dbUsers = await db.find({mail:{$ne : "admin@gmail.com"}}).toArray()
   res.status(201).send(dbUsers);
}
))
//get user

app.get('/leaves',expressAsyncHandler(async(req,res)=>{
   const db = req.app.get("leavesCollection");
   const dbLeaves = await db.find({status:'Pending'}).toArray()
   res.status(201).send(dbLeaves);
}
))



app.post('/signup',expressAsyncHandler(async (req,res)=>{

    const db = req.app.get("userCollection");
    const user = req.body;   
    console.log(user);   
    const userExist =await db.findOne({mail:user.mail})

    if(userExist!=null){

        res.send({Message:"User Already Exists"})

    }else{

        var hashedPass =await bcryptjs.hash(user.password,5)
        user.password = hashedPass;
        console.log("user=",user)
        
        user.leaveRemaining = 24;
        user.leaveUsed=0;
        console.log("user=",user)
        var userInserted =await db.insertOne(user);
    
        res.send({Message:"User Inserted"})
    }
    
}

)
)


//delete user
app.delete('/deleteStaff/:id',expressAsyncHandler( async (req,res)=>{
    const userId = req.params.id;

    const db = req.app.get("userCollection");
    const deleteUser =await db.deleteOne({mail:userId});
    res.send({Message:userId});

}

))


app.post('/user-login',expressAsyncHandler(async( req,res)=>{
    //Mongo db collection
    const db = req.app.get("userCollection");
    
    // user from the frontend
    const user = req.body;

    //user from the Database
    const userDB =await db.findOne({userName:user.userName});
    console.log(userDB)
    //invalid username
    if(userDB===null){
        res.status(205).send({Message:"Username is Invalid"})
    }
    else{
        //comparing the password
        let isPasswordMatched =await bcryptjs.compare(user.password,userDB.password);
        if(isPasswordMatched===false){
            //password mismatched
            res.status(204).send({Mesage:"Password doesnot Matched!"})
        }
        else{
            const jwtToken = jwt.sign({userName:userDB.userName},"abcd",{expiresIn:200000})
            res.status(201).send({Message:"VALID USER", token:jwtToken,userDetails:userDB})
        }
    }



}
))

const loginAuthentication = require("./middleWares/loginAuthentication");
const { async } = require("rxjs");
const { ObjectId } = require("mongodb");

app.post('/test',loginAuthentication, expressAsyncHandler(  async (req,res)=>{
    console.log(req.headers);
    res.send({Message:"Valid user"});
}
))
module.exports= app