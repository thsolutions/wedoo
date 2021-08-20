import React from "react";
import weedoLogo from "../assets/download.svg";
import decor from "../assets/Empty.svg";
import { Link } from "react-router-dom";
const SpalshScreen = () => {
  return (
    <div className="spalsh">
      <img src={weedoLogo} alt="" className="weedo-logo" />
      <img src={decor} alt="" className="decor" />
      <Link to="/home">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default SpalshScreen;
