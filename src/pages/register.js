import React from "react";
import weDooLogoSmall from "../assets/wedoosmall.svg";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="register-header">
        <img src={weDooLogoSmall} alt="" />
        <h1>Let's Register.</h1>
        <p>
          Have an account?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#2a966e" }}
          >
            <span>Login</span>
          </Link>
        </p>
      </div>
      <div className="register-main">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <a>Register</a>
        </Link>
      </div>
    </div>
  );
};

export default Register;
