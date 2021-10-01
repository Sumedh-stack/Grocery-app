const express = require("express");
const router = express.Router();
const axios = require("axios");
const Buyer = require("../models/Buyer");
const Seller = require("../models/Seller");
const config = require("config");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');
const {OAuth2Client} = require("google-auth-library");

const client = new OAuth2Client("997283847932-6kqihc3fgfcvrk6nk7af4cnq2p0h3crk.apps.googleusercontent.com");



exports.sellerlogin = async (req , res) => {
    try{    
        const tokenId = req.body.tokenId;
        console.log(req.body);
        const response = await client.verifyIdToken({idToken:tokenId , audience : "997283847932-6kqihc3fgfcvrk6nk7af4cnq2p0h3crk.apps.googleusercontent.com" });
        const {email_verified , name , email , picture} = response.payload;
        //console.log(response.payload);
        //res.json({success:true,email_verified,name,email});

        if(email_verified){
            let seller = await Seller.findOne({email}) ;
            if(seller){// if user already exists

                 //JWT tokens

       const payload = {// sending this payload to jwt
        seller :{
            id : seller.id
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
                let newSeller = new Seller({ 
                    name ,
                    email ,
                    password ,
                    avatar : picture 
                }) ;
                await newSeller.save();

                const payload = {// sending this payload to jwt
                    seller :{
                        id : newSeller.id
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