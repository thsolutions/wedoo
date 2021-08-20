import React from "react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/mobilebottomnav";
import dashboardImg from "../assets/notificationdetails.svg";
const Notification = () => {
  return (
    <div className="dashboard">
      <Navbar></Navbar>
      <img src={dashboardImg} alt="" className="dashboardimg" />
      <MobileNav></MobileNav>
    </div>
  );
};

export default Notification;
