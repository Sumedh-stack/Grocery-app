const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res , next){

    //Get token 
    const token = req.header('x-auth-token');

    //console.log(token);

    //check if token is there

    if(!token){
       return  res.status(401).json({msg : "No token found , Authorization Denied"});
    }

    // check token credentials

    try {
        const decoded = jwt.verify(token , config.get('jsonTokenSecret'));
       req.user = decoded.user;
        // setting the req credentials
        
        next();//required for middleware

        
    } catch (err) {
        res.status(401).json({msg : "Token is not valid"});
        
    }
    
}