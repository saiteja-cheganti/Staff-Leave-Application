//***************************** */
const express = require("express")
const app = express.Router()



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


app.post('/users',expressAsyncHandler(async(req,res)=>{
    console.log("logggggggggggggggggggggg");
   const db = req.app.get("userCollection");
   const dbUsers = await db.find().toArray()
   res.send(dbUsers);

}
))
//get user

app.use(express.json())
app.post('/signup',expressAsyncHandler(async (req,res)=>{

    const db = req.app.get("userCollection");
    const user = req.body;
    const userExist =await db.findOne({userName:user.userName})

    if(userExist!=null){

        res.send({Message:"User Already Exists"})

    }else{

        var hashedPass =await bcryptjs.hash(user.password,5)
        user.password = hashedPass;
        
        var userInserted =await db.insertOne(user);
        res.send({Message:"User Inseted"})
    }
    
}

))

//get user by id
//update user

//delete user

app.post('/getLeaves',expressAsyncHandler(async(req,res)=>{
        const db = req.app.get("leavesCollection");
        const user = req.body;
        console.log("user=",user)
        const leaves = await db.find({mail:user.mail}).toArray();
        res.status(201).send({leave:leaves});
}))



app.post('/user-login',expressAsyncHandler(async( req,res)=>{
    //Mongo db collection
    const db = req.app.get("userCollection");
    
    // user from the frontend
    const user = req.body;

    //user from the Database
    const userDB =await db.findOne({mail:user.mail});
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



app.post('/insertLeave',expressAsyncHandler(async (req,res)=>{

    const db = req.app.get("leavesCollection");
    const leave = req.body;
    var leaveInserted =await db.insertOne(leave);
    console.log(leave)
    res.send({Message:"Leave Inserted"})
    
}

))





const loginAuthentication = require("./middleWares/loginAuthentication");
const { async } = require("rxjs");

app.post('/test',loginAuthentication, expressAsyncHandler(  async (req,res)=>{
    console.log(req.body);
    res.send({Message:"Valid user"});
}
))
module.exports= app