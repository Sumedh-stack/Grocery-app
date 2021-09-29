const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    
    name:
    {
        type:String,
        required:true
    },

    rollNo:
    {
        type:Integer,
        unique:true,
        required:true
    },

    password:
    {
        type:String,
        required:true
    },

    avatar:
    {
        type:String
    },

    date:
    {
        type: Date,
        default: Date.now
    }
})

module.exports = Buyer = mongoose.model("buyer", BuyerSchema);