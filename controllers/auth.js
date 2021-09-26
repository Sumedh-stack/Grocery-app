const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require("../models/User");
const config = require("config");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');
const {OAuth2Client} = require("google-auth-library");

const client = new OAuth2Client("997283847932-6kqihc3fgfcvrk6nk7af4cnq2p0h3crk.apps.googleusercontent.com");



exports.googlelogin = async (req , res) => {
    try{    
        const tokenId = req.body.tokenId;
        console.log(req.body);
        const response = await client.verifyIdToken({idToken:tokenId , audience : "997283847932-6kqihc3fgfcvrk6nk7af4cnq2p0h3crk.apps.googleusercontent.com" });
        const {email_verified , name , email , picture} = response.payload;
        //console.log(response.payload);
        //res.json({success:true,email_verified,name,email});

        if(email_verified){
            let user = await User.findOne({email}) ;
            if(user){// if user already exists

                 //JWT tokens

       const payload = {// sending this payload to jwt
        user :{
            id : user.id
        }
           
       }

       jwt.sign(payload , config.get('jsonTokenSecret') ,
        { expiresIn : '30d'} ,
        (err , token) => {
            if(err) throw err;

            res.json({token});
            
        }) 

    
                
            }
            else{// adding new user

                let password = email + uuidv4();
                let newUser = new User({ 
                    name ,
                    email ,
                    password ,
                    avatar : picture 
                }) ;
                await newUser.save();

                const payload = {// sending this payload to jwt
                    user :{
                        id : newUser.id
                    }
                       
                   }
            
                   jwt.sign(payload , config.get('jsonTokenSecret') ,
                    { expiresIn : '30d'} ,
                    (err , token) => {
                        if(err) throw err;
            
                        res.json({token});
                    }) 



            }
        }
    }
    catch(err) {
        console.error(err.message);
      res.status(500).send("server error");
    }
}