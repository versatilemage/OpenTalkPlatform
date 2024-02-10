import React from "react";
import { useState } from "react";
import "../login/login.css";
import "./signup.css";
import linkedin from "../../assets/linkedin.svg";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import TextInput from "../../Components/shared/TextInput";
// import LoginButton from "../../Components/shared/SignupLoginButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <>
      <div className="login-container">
        <div className="signup-bg"></div>
        <div className="form-container">
          <form className="login-form">
            <p className="login-heading">Signup</p>
            <p className="login-text">
              Welcome back! Please Signup to enjoy your application.
            </p>
            <TextInput
              label="Username"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
              label="Re-enter Password"
              type="password"
              id="re-enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

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
            </div>
            <button
              className="login-label login-button signup-button"
              onClick={handleLogin}
            >
              Sign Up
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
