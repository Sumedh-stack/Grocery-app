const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Project = require("../../models/Project");
const auth = require("../../middleware/auth");

// @route GET api/project/certificate
// @desc  Certificates of a user
// @access Private

router.get("/certificate",auth, async (req, res) => {
    try{

        const user = await User.findById(req.user.id);
        return res.status(200).json(user.certificates);
    }catch(err){
        console.error(err.message);
        return res.status(500).json("Server Error in getting your certificates");
    }
});

// @route POST api/project/certificate
// @desc  update certificates of a user
// @access Private

router.post("/certificate",auth, async (req, res) => {
    try{

        const user = await User.findById(req.user.id);
        if( user.role !== "admin")
        {
            const {certificate} = req.body;
            if(!certificate)
            return res.json("Please provide a valid certificate");

            await User.findByIdAndUpdate(
                {_id : user._id},
                { $set : {certificates : [...certificates , certificate]}},
                {new : true }
            );

            res.status(200),json(user.certificates);
        }
        else
        {
            return res.status(401).json("Access Denied");
        }

    }catch(err){
        console.error(err.message);
        return res.status(500).json("Server Error while adding a certificate to the db");
    }
});