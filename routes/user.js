const router = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const {verifyAndAuthorization, verifyToken, verifyAndAdmin}= require("../middleware/verifyToken")


// Update User

router.put("/:id", verifyAndAuthorization, userController.updateUser);

// Delete User

router.delete("/", verifyAndAuthorization, userController.deleteUser);

// Get User

router.get("/", verifyAndAuthorization, userController.getUser);

// Get User

router.get("/", verifyAndAdmin, userController.getAllUsers);


module.exports = router
