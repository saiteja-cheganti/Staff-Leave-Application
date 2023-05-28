const express = require("express")
const app = express();


const  path = require("path")

app.use(express.static(path.join(__dirname,'./build')))
//assign the port number
const port = 3999;
app.listen(port,()=>console.log("Server is listening at the port: ",port))
//console.log(app)

//DATABASE*****************

const dbClient= require("mongodb").MongoClient;

dbClient.connect('mongodb://localhost:27017')
.then((dbRef)=>{
    const dbObj = dbRef.db("test1");
    const userCollection = dbObj.collection('users');
    app.set('userCollection',userCollection);

    const leavesCollection = dbObj.collection('leaves');
    app.set('leavesCollection',leavesCollection);

    console.log("Connection successfull")
})
.catch((err)=>{
    console.log("Database Connection Error:", err);
})




const userApi = require("./apis/users")
app.use("/users",userApi)

const adminApi = require("./apis/adminApi")
app.use("/admin",adminApi)


const invalidPathMiddleware =(req,res,next)=>{
    res.send({Message:"Invalid Path"})
}

app.use("*",invalidPathMiddleware)

const errorHadlingMiddleware = (error,req,res,next)=>{
    res.send({Message:error.message});
}

app.use(errorHadlingMiddleware)