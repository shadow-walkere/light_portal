import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginSignup.css"; // ✅ Import the CSS file

const LoginSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setErrorMsg(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg("Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-image-section"></div>
        <div className="login-form-section">
          <h2>Login to Student Portal</h2>

          <img
            src="data:image/png;base64,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"
            alt="Login Illustration"
            className="login-image"
          />
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Hide password" : "Show password"}
                className="password-toggle-icon"
              />
            </div>

            {errorMsg && <p className="error-msg">{errorMsg}</p>}

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
