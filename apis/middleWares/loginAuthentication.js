const jwt = require('jsonwebtoken')

const loginAuthentication = (req,res,next)=>{
    const userToken = req.headers.authorization;
    if(userToken ===undefined){
        res.send({Message:"Please login"});
    }
    else{
        console.log(userToken)
        const token = userToken.split(" ")[1];
        try{
            jwt.verify(token,"abcd");
            next();
        }
        catch(err){
            console.log("errrrr")
            next(err)
        }
    }
}

module.exports = loginAuthentication