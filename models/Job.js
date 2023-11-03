const mongoose=require("mongoose");
const JobSchema = new mongoose.Schema( 
    {
        title: {type: String, required: true},
        company: {type: String,required: true},
        description:{type: String, default: true},
        location: {type: String, required: true},
        salary: {type: String, required: true},
        period: {type: String, required: true},
        contract: {type: String, required: true},
        requirements: {type: Array, required:true},
        imageUrl: {type: String, required: true},
        aganetId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    }, {timestamps: true}
  );
  module.exports = mongoose.model("Job", JobSchema);