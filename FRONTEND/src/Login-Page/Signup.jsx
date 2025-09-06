import React, { useState } from "react";
import { Link } from "react-router-dom";
import train from "../assets/train-background.png";
import "./login.css";

export function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    let isValid = true;

    setUserError("");
    setEmailError("");
    setPasswordError("");

    if (!username.trim()) {
      setUserError("*Username required");
      isValid = false;
    }
    if (!email.trim()) {
      setEmailError("*Email required");
      isValid = false;
    }
    if (!password.trim()) {
      setPasswordError("*Password required");
      isValid = false;
    }

    if (isValid) {
      console.log("username: ", username);
      console.log("email: ", email);
      console.log("password: ", password);
    }
  };

  return (
    <div className="loginPage">
      <div id="container">
        <div id="loginbox">
          <div id="login">Sign Up</div>
          <form onSubmit={handleSubmit}>
            <div id="inputbox">
              <div className="input">
                <i className="fa-solid fa-circle-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {userError && <p className="error-message">{userError}</p>}
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {emailError && <p className="error-message">{emailError}</p>}
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`fa-solid ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
            <div className="submit">
              <div className="submitbox">
                <button type="submit">Sign Up</button>
              </div>
            </div>
          </form>
          <div className="bottom-loginPage">
            <div id="signup">
              Already have an account?<Link to="/login">Login</Link>
            </div>
          </div>
        </div>
        <div id="pic">
          <img src={train} alt="Train" />
        </div>
      </div>
    </div>
  );
}