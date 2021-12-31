const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  departingDate: {
    type: String,
    
  },
  returnDate: {
    type: String,
    
  },
  flyingFrom: {
    type: String,
    
  },
  flyingTo: {
    type: String,
    
  },
  biletNo: {
    type: String,
    
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }

})

module.exports = mongoose.model('User', userSchema)