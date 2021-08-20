import React, { useState } from "react";
import axios from "axios";
import weDooLogoSmall from "../assets/wedoosmall.svg";
import facebook from "../assets/facebook.svg";
import gmail from "../assets/gmail.svg";
import Navbar from "../components/Navbar";
import MobileNav from "../components/mobilebottomnav";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ProjectAdd = () => {
  const [pending, setPending] = useState("");
  const [procname, setProcName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const getDaysArray = function(s,e) {for(var a=[],d=new Date(s);d<=e;d.setDate(d.getDate()+1)){ a.push(new Date(d));}return a;};

  const onSubmit = async () => {
    const daylist = getDaysArray(new Date(startDate),new Date(endDate));
    const daylistcorect = daylist.map((v)=>v.toISOString().slice(0,10))
    console.log(daylistcorect)
    const ProcDetails = {
      projectname: procname,
      dates:daylistcorect
    };
    console.log(ProcDetails);
    const projectadd = await axios.post(
      "http://localhost:5000/procadd",
      ProcDetails
    );
    if (projectadd.status === 200) {
      setPending("Your Project is moved to Pending State");
    } else {
      setPending("");
    }
    
  };
  return (
    <>
      <div className="register">
        <Navbar></Navbar>
        <div className="register-header">
          <h1>Add Project</h1>
        </div>
        <div className="register-main">
          <input
            type="text"
            placeholder="Project Title"
            value={procname}
            onChange={(e) => setProcName(e.target.value)}
          />
          <div className="dates">
            <div style={{ marginRight: "5px" }}>
              <label htmlFor="Start Date">Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholder="Start Date"
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <label htmlFor="End Date">End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholder="End Date"
              />
            </div>
          </div>

          <a onClick={onSubmit}> Add</a>
          <p style={{ textAlign: "center", marginTop: "10px" }}>{pending}</p>
        </div>
      </div>
      <MobileNav></MobileNav>
    </>
  );
};

export default ProjectAdd;
