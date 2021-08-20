import React from "react";
import weDooLogoSmall from "../assets/wedoosmall.svg";
import chat from "../assets/chat.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={weDooLogoSmall} alt="" />
      <Link to="/message">
        <img src={chat} alt="" style={{ cursor: "pointer" }} />
      </Link>
    </div>
  );
};

export default Navbar;
