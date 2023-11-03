const router = require("express").Router();
const jobController = require("../controllers/jobController");
const {verifyAndAuthorization, verifyToken, verifyAndAdmin}= require("../middleware/verifyToken")

// Post Job

router.post("/", verifyAndAdmin, jobController.createJob);


// Update Job

router.put("/:id", verifyAndAdmin, jobController.updateJob);

// Delete job

router.delete("/:id", verifyAndAdmin, jobController.deleteJob);

// Get job

router.get("/:id",jobController.getJob);

// Get Jobs

router.get("/", jobController.getAllJobs);

// Search Jobs

router.get("/search/:key", jobController.searchJobs);


module.exports = router