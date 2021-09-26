const express = require("express");
const router = express.Router();
const {googlelogin} = require("../../controllers/auth");


// @route POST api/auth/googlelogin
// @desc  Test route
// @access Private
router.post("/googlelogin" ,googlelogin);

// @route GET api/auth
// @desc  Test route
// @access Public


module.exports = router ; 