const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  active:{
    type: Boolean, 
    default: false
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }
});

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')){
    console.log('password has been modified')
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash 
  }
  
  next() 
})

module.exports = mongoose.model("User", UserSchema);
