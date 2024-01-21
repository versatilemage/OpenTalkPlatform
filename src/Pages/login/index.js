import React from "react";
import { useState } from "react";
import "./login.css";
import linkedin from "../../assets/linkedin.svg";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";
import TextInput from "../../Components/shared/TextInput";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const handleForgotPassword = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="login-container">
        <div className="bg-image"></div>
        <div className="form-container">
          <form className="login-form">
            <p className="login-heading">Login</p>
            <p className="login-text">
              Welcome back! Please login to your account to continue.
            </p>
            <TextInput
              label="Username"
              type="text"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
              label="Password"
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <div className="form-group">
              <label className="login-label label-color" htmlFor="username">
                Username
              </label>
              <input
                className="login-text-field"
                type="text"
                id="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="login-label label-color" htmlFor="password">
                Password
              </label>
              <input
                className="login-text-field"
                type="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div> */}
            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label
                  className="login-label remember-label-color"
                  htmlFor="rememberMe"
                >
                  Remember me
                </label>
              </div>
              <div style={{ marginLeft: "210px" }}>
                <p
                  className="login-label remember-label-color forgot-password-link"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </p>
              </div>
            </div>
            <button className="login-label login-button" onClick={handleLogin}>
              Login
            </button>
            <div className="separator">
              <div className="line left-line"></div>
              <p className="login-label or-text">OR</p>
              <div className="line line-right"></div>
            </div>
            <div className="separator" style={{ marginLeft: "70px" }}>
              <img className="image-style" src={linkedin} alt="Linked In" />
              <img className="image-style" src={google} alt="Google" />
              <img src={github} alt="Github" />
            </div>
            <p style={{ marginTop: "20px" }}>
              <span className="login-label new-user-text">New user? </span>
              <Link to="/signup" className="login-label signup-text">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
