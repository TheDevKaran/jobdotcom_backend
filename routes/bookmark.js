const router = require("express").Router();
const bookmarkController = require("../controllers/bookmarkController");
const {verifyToken, verifyTokenAndAuthorization} = require("../middleware/verifyToken"); // Import the verifyToken middleware



// CREATE BOOKMARKS
router.post("/", bookmarkController.createBookmark);


// DELETE BOOKMARKS

router.delete("/:id", verifyToken, bookmarkController.deleteBookmark);


// GET BOOKMARKS
router.get("/:userId", bookmarkController.getBookmarks);



module.exports = router