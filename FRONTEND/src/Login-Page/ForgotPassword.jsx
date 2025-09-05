import React, { useState } from "react";
import train from "../assets/train-background.png";
import "./login.css";

export function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [userError, setUserError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    setUserError("");

    if (!username.trim()) {
      setUserError("*Username/email required");
      isValid = false;
    }

    if (isValid) {
      console.log("username/email:", username);
    }
  };

  return (
    <div className="loginPage">
      <div id="container">
        <div id="loginbox">
          <div id="login">Forget Password</div>
          <form onSubmit={handleSubmit}>
            <div id="inputbox">
              <div className="input">
                <i className="fa-solid fa-circle-user"></i>
                <input
                  type="text"
                  placeholder="Username or Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {userError && <p className="error-message">{userError}</p>}
            </div>
            <div className="submit">
              <div className="submitbox">
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
        <div id="pic">
          <img src={train} alt="Train" />
        </div>
      </div>
    </div>
  );
}
