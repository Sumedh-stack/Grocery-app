const express = require("express");
const router = express.Router();
const {sellerlogin} = require("../../controllers/seller");
const {buyerlogin} = require("../../controllers/buyer");


// @route POST api/auth/googlelogin
// @desc  Test route
// @access Private
router.post("/seller/googlelogin" ,sellerlogin);
router.post("/buyer/googlelogin", buyerlogin);

// @route GET api/auth
// @desc  Test route
// @access Public


module.exports = router ; 