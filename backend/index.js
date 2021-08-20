require("dotenv").config();
const express = require("express");
const mongoDB = require("./db");
const app = express();
const Project = require("./models/Project");
const cors = require("cors");
mongoDB();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("connected");
});

app.post("/procadd", async (req, res) => {
  let ProjectADD = new Project({
    projectname: req.body.projectname,
    dates:req.body.dates
  });
  try {
    await ProjectADD.save();
    console.log("Saved");
    res.status(200).json({ mes: "saved" });
  } catch (e) {
    res.status(400).json({ mes: "failed" });
  }
});

app.put("/procupdate", async (req, res) => {
  const ProjectUpdate = await Project.findOne({ _id: req.query.id });
  if (!ProjectUpdate)
    return res.status(400).json({
      message: "Can't Update",
    });
  ProjectUpdate.set({
    approved: true,
  });
  try {
    await ProjectUpdate.save();
    console.log("updated");
    res.status(200).json({ mes: "updated" });
  } catch (e) {
    res.status(400).json({ mes: "failed" });
  }
});

app.get("/procfget", async (req, res) => {
  const ProjectGet = await Project.find({ approved: false });
  res.status(200).json({
    data: ProjectGet,
  });
});

app.get('/procdateget',async (req,res) => {
  const ProjectGet = await Project.find({dates : {$in:['2021-08-2011']},approved:true})
  res.status(200).json({
    data: ProjectGet,
  });
})

app.get("/proctget", async (req, res) => {
  const ProjectGet = await Project.find({ approved: true });
  res.status(200).json({
    data: ProjectGet,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on PORT ${PORT}`));
