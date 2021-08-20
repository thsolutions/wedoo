const mongoose = require("mongoose");

const Project = new mongoose.Schema(
  {
    projectname: { type: String, required: true },
    dates:{type: Array,required:true},
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", Project);
