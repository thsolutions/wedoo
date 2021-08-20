import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/mobilebottomnav";
import dashboardImg from "../assets/girl.svg";
import Sidebar from "../components/Sidebar";
import axios from "axios";
const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const getFProc = async () => {
    const proc = await axios.get("http://localhost:5000/proctget");
    setProjects([...proc.data.data]);
    console.log(proc.data.data);
  };
  useEffect(() => {
    getFProc();
  }, []);
  return (
    <div className="dashboard">
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="pending-projects">
        <h3>Pending Projects</h3>
        <div className="work">
          {projects.map((project) => {
            const date1 = new Date(project.projectstarttime);
            const date2 = new Date(project.projectendtime);
            const Difference_In_Time = date2.getTime() - date1.getTime();
            const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            return (
              <div className="work-card">
                <p className="procname">{project.projectname}</p>
                <div className="days-sec">
                  <div className="days">
                    <p>{Math.ceil(Difference_In_Days)} days Left</p>
                    <p>New</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MobileNav></MobileNav>
    </div>
  );
};

export default Dashboard;
