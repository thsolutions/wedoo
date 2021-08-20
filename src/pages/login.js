import React from "react";
import weDooLogoSmall from "../assets/wedoosmall.svg";
import facebook from "../assets/facebook.svg";
import gmail from "../assets/gmail.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="register">
      <div className="register-header">
        <img src={weDooLogoSmall} alt="" />
        <h1>Let's Register.</h1>
        <p>
          Do you have an account?{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#2a966e" }}
          >
            <span>Signup</span>
          </Link>
        </p>
      </div>
      <div className="register-main">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <a>Login</a>
        </Link>
      </div>

      <div className="register-social-login">
        <button>
          {" "}
          <img src={facebook} alt="" /> Facebook
        </button>
        <button>
          {" "}
          <img src={gmail} alt="" /> Login
        </button>
      </div>
    </div>
  );
};

export default Login;
