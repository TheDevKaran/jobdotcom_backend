const User = require("../models/User");
const CryptoJS = require("crypto-js");

module.exports = {
    updateUser: async (req, res) => {

        if(req.body.password){
            req.body.password=CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString()
        }
        try{
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,{
                    $set: req.body
                }, {new: true}
            );
            const {password,__v, createAt, ...others} = updateUser;

            res.status(200).json({...others});       
        }catch (error){
            console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the user.' });

        }

    },


}