const Bookmark = require("../models/Bookmark");
const Job = require("../models/Job");

module.exports = {
    createBookmark: async (req, res) => {

        const jobID = req.body.job;
        try {
            const job = await Job.findById(jobID);
            if(!job){
                return res.status(404).json({error: "Job Not Found"});
            }
            const newBook= new BookMark({job: job, userId: req.user.id}); 
             const savedBookmark = await newBook.save();
             const {__v, updatedAt, ...newBookmarkInfo}= savedBookmark._doc;
            res.status(201).json("Bookmark Successfully Created");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteBookmark: async (req, res) => {
        try {
            await Bookmark.findByIdAndDelete(req.params.id); // Corrected the method name
            res.status(200).json("Bookmark Successfully Deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getBookmarks: async (req, res) => {
        try {
            const userId = req.params.userId; // Corrected the parameter name
            const bookmarks = await Bookmark.find({ userId: userId }); // Use the userId correctly
            res.status(200).json(bookmarks);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
