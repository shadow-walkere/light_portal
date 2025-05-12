// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import "./LoginSignup.css"; // ✅ Import the CSS file

// const LoginSignup = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMsg("");

//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         navigate("/dashboard");
//       } else {
//         setErrorMsg(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMsg("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <div className="login-body">
//       <div className="login-container">
//         <div className="login-image-section"></div>
//         <div className="login-form-section">
//           <h2>Login to Student Portal</h2>

//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvWFJ0THemUhRjcb-yt___ZdLlc1D-ccCow&s"
//             alt="Login Illustration"
//             className="login-image"
//           />
//           <form onSubmit={handleLogin} className="login-form">
//             <input
//               type="email"
//               placeholder="Email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <FontAwesomeIcon
//                 icon={showPassword ? faEyeSlash : faEye}
//                 onClick={() => setShowPassword(!showPassword)}
//                 title={showPassword ? "Hide password" : "Show password"}
//                 className="password-toggle-icon"
//               />
//             </div>

//             {errorMsg && <p className="error-msg">{errorMsg}</p>}

//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 bg-blue-700 flex items-center justify-center p-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvWFJ0THemUhRjcb-yt___ZdLlc1D-ccCow&s"
            alt="Student login"
            className="rounded-xl shadow-lg w-64 sm:w-72 md:w-80"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
            Login to Student Portal
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500 cursor-pointer"
              />
            </div>

            {/* <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Login
            </button> */}
            <button
              type="button"
              onClick={() => {
                localStorage.setItem("token", "demo");
                navigate("/dashboard");
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
