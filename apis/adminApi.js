//***************************** */
const express = require("express")
const app = express.Router()
//***************************** */



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


app.get('/users',expressAsyncHandler(async(req,res)=>{
    console.log("logggggggggggggggggggggg");
   const db = req.app.get("userCollection");
   const dbUsers = await db.find().toArray()
   res.status(201).send(dbUsers);
}
))
//get user

app.get('/leaves',expressAsyncHandler(async(req,res)=>{
    console.log("Leavesssssssssss");
   const db = req.app.get("leavesCollection");
   const dbLeaves = await db.find().toArray()
   res.status(201).send(dbLeaves);
}
))


app.use(express.json())
app.post('/signup',expressAsyncHandler(async (req,res)=>{

    const db = req.app.get("userCollection");
    const user = req.body;
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
    
        res.send({Message:"User Inseted"})
    }
    
}

))

//get user by id
//update user

//delete user
app.delete('/delete-user/:id',expressAsyncHandler( async (req,res)=>{
    const userId = req.params.id;

    const db = req.app.get("userCollection");
    const deleteUser =await db.deleteOne({userName:userId});
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

const loginAuthentication = require("./middleWares/loginAuthentication")

app.post('/test',loginAuthentication, expressAsyncHandler(  async (req,res)=>{
    console.log(req.headers);
    res.send({Message:"Valid user"});
}
))
module.exports= app