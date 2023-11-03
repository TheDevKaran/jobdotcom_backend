const mongoose=require("mongoose");
const UserSchema = new mongoose.Schema( 
    {
        username: {type: String, required: true, unique: true},
        email: {type: String,required: true, unique:true},
        password:{type: Boolean, default: false},
        location: {type: String, required: false},
        isAdmin: {type: Boolean, default: false},
        isAgent: {type: Boolean, default: false},
        skills: {type: Array, default: false},
        profile: {type: String, required:true, default: },
    }
  );
  mmodule.exports = mongoose.model("User, UserSchema");