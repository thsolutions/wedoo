import React, { useState, useEffect } from "react";
import axios from "axios";
const AdminPage = () => {
  const [projects, setProjects] = useState([]);
  const getFProc = async () => {
    const proc = await axios.get("http://localhost:5000/procfget");
    setProjects([...proc.data.data]);
    console.log(proc.data.data);
  };
  useEffect(() => {
    getFProc();
  }, []);
  const onSubmit = async (id) => {
    const proc = await axios.put(`http://localhost:5000/procupdate?id=${id}`);
    getFProc();
  };
  return (
    <div className="admin-page">
      {projects.map((project) => {
        return (
          <div className="project-details">
            <p>{project.projectname}</p>
            <div className="btns">
              <button className="cancel">Cancel</button>
              <button className="ok" onClick={() => onSubmit(project._id)}>
                OK
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPage;
