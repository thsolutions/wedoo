import React from "react";
import GirlImage from "../assets/WeDoo.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="hero-img">
        <img src={GirlImage} alt="" />
      </div>
      <h1>Contracting has never been made this easy!</h1>
      <p>
        You can monitor and handle your projects at the comfort of wherever you
        are with few clicks, want to know how?
      </p>
      <div className="buttons-section">
        <Link to="/register">
          <button className="reg-button">Register</button>
        </Link>
        <Link to="/login">
          <button className="log-button">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
