const jwt= require('jsonwebtoken');
const User =require('../models/User');
const CryptoJS=require("crypto-js");

module.exports = {
    createUser: async (req, res) => {

const hashedPassword=CryptoJS.AES.encrypt(req.body.password, process.env.SECRET);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            
            password:hashedPassword,
        });
        try{
            const SavedUser=await newUser.save();
            res.status(201).json(SavedUser);
        } catch (error){
            res.status(500).json(error)

        }

    },

    loginUser: async (req,res)=> {
        try{
            const user = await User.findOne({email: req.body.email});

            !user && res.status(401).json("wrong login details");

            const decryptedpass = CryptoJS.AES.decrypt(user.password, process.env.SECRET); 
            const depassword = decryptedpass.toString(CryptoJS.enc.Utf8);

            depassword !== req.body.password && res.status(401).json("Wrong Passsword");
            const token = jwt.sign({userId:user._id,
                email:user.email,
                username:user.username,
                isAdmin:user.isAdmin
            },process.env.JWT_SEC);
            const{password, __v, ...others} = user._doc;
            res.status(200).json({...others,userToken:token}); 
        }catch(error){
            res.status(500)

        }
    }

}
