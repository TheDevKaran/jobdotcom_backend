const mongoose=require("mongoose");
const UserSchema = new mongoose.Schema( 
    {
        username: {type: String, required: true},
        email: {type: String,required: true, unique: true},
        password:{type: String, default: false},
        phone:{type: String, default: false},
        location: {type: String, required: false},
        isAdmin: {type: Boolean, default: false},
        isAgent: {type: Boolean, default: false},
        skills: {type: Array, default: false},
        profile: {type: String, required:false, default: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"},
    },{timestamps: true}
  );
  module.exports = mongoose.model("User", UserSchema);
