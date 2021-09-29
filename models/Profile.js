const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'buyer'
  },
  orders: {
    type: [String]
  },
  balance: {
    type: Integer
  },
  payments: {
    type: [Integer]
  },
  location: [
    {
      hostelNo: {
        type: Integer,
        required: true
      },
      typeOfHostel: {
        type: Integer,
        required: true
      },
      flatNo: {
        type: String
      }
    }
  ],
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = BuyerProfile = mongoose.model('profile', ProfileSchema);