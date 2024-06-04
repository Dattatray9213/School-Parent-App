import React from "react";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./Home.css";

const slideImages = [
  {
    url: "https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1-750x325.jpg",
    caption: "School",
  },
  {
    url: "https://raghavfoundation.org.in/wp-content/uploads/2023/05/school-image-750x420.jpg",
    caption: "Play Ground",
  },
  {
    url: "https://cdn.britannica.com/79/218779-131-A1880104/Empty-high-school-classroom.jpg",
    caption: "Play Ground",
  },
];
const logoUrl = "https://globalschool.org.in/images/global-school-logo.png";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "600px",
  backgroundSize: "cover",
};

export const Home = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img src={logoUrl} width="100" height="100" alt="Logo" />
        </div>
        <div className="school-name">
          <h1 className="heading-title"> Global International School</h1>
          <br></br>
        </div>
      </div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((image, index) => (
            <div key={index}>
              <div
                style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
              >
                {/* <span style={spanStyle}>{image.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1-750x325.jpg",
    caption: "School",
  },
  {
    url: "https://raghavfoundation.org.in/wp-content/uploads/2023/05/school-image-750x420.jpg",
    caption: "Play Ground",
  },
  {
    url: "https://cdn.britannica.com/79/218779-131-A1880104/Empty-high-school-classroom.jpg",
    caption: "Play Ground",
  },
];
const logoUrl = "https://globalschool.org.in/images/global-school-logo.png";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "600px",
  backgroundSize: "cover",
};

export const Home = () => {
  const [registrationId, setRegistrationId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch users from the JSON file
      const response = await fetch("/users.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const users = await response.json();

      // Check if the user exists and the password matches
      const user = users.find(
        (user) =>
          user.registrationId === registrationId && user.password === password
      );

      if (user) {
        // Redirect to the dashboard
        navigate("/StaffDashboard");
      } else {
        setError("Invalid registration ID or password");
      }
    } catch (error) {
      console.error("Error fetching the users:", error);
      setError("Failed to load user data");
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img src={logoUrl} width="100" height="100" alt="Logo" />
        </div>
        <div className="school-name">
          <h1 className="heading-title"> Global International School</h1>
          <br></br>
        </div>
      </div>
      <div className="main-page-conatiner">
        <div className="sliding-images">
          <div className="slide-container">
            <Slide>
              {slideImages.map((image, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${image.url})`,
                    }}
                  >
                    {/* <span style={spanStyle}>{image.caption}</span> */}
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <div className="main-container">
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div>
                <label>Registration ID</label>
                <input
                  type="text"
                  value={registrationId}
                  onChange={(e) => setRegistrationId(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";


const slideImages =
  "https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1-750x325.jpg";

const logoUrl = "https://globalschool.org.in/images/global-school-logo.png";

export const Home = () => {
  const [registrationId, setRegistrationId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch users from the JSON file
      const response = await fetch("/users.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const users = await response.json();

      // Check if the user exists and the password matches
      const user = users.find(
        (user) =>
          user.registrationId === registrationId && user.password === password
      );

      if (user) {
        // Redirect to the dashboard
        navigate("/StaffDashboard");
      } else {
        setError("Invalid registration ID or password");
      }
    } catch (error) {
      console.error("Error fetching the users:", error);
      setError("Failed to load user data");
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img src={logoUrl} width="100" height="100" alt="Logo" />
        </div>
        <div className="school-name">
          <h1 className="heading-title">Global International School</h1>
        </div>
      </div>
      <div className="main-page-container">
        <div className="slide-container">
          <img src={slideImages} alt="slide" />
        </div>
        <div className="main-container">
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div>
                <label>Registration ID</label>
                <input
                  type="text"
                  value={registrationId}
                  onChange={(e) => setRegistrationId(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// Recent Code
import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";

const slideImages =
  "https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1-750x325.jpg";

const logoUrl =
  "http://www.connectustech.com/wp-content/uploads/2021/01/connectusschool-app-for-parents.png";

export const Home = () => {
  const [userType, setUserType] = useState("Staff");
  //const [userType, setUserType] = useState("Parents");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [registrationId, setRegistrationId] = useState("");
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    RegistrationId: "",
    Password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (userType === "Staff") {
      try {
        const response = await axios.get("/users.json");
        const users = response.data;
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          navigate("/StaffDashboard");
        } else {
          alert("Invalid credentials for Staff");
        }
      } catch (error) {
        console.error("Error fetching users.json:", error);
      }
    } else if (userType === "Parents") {
      try {
        const response = await axios.post(
          "https://localhost:7019/api/Auth/ParentLogin",
          loginData
        );
        console.log("Login successful:", response.data);
        alert("Login successful");
        Navigate("/ParentDashboard");
      } catch (error) {
        console.error("Login Failed", error.response?.data || error.message);
        alert("Invalid RegistrationId or Password");
      }
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img src={logoUrl} width="100" height="100" alt="Logo" />
        </div>
        <div className="school-name">
          <h1 className="heading-title">School Parent App</h1>
        </div>
      </div>
      <div className="main-page-container">
        <div className="slide-container">
          <img src={slideImages} alt="slide" />
        </div>
        <div className="main-container">
          <div className="login-container">
            <h2>Login Form</h2>

            {userType === "Staff" ? (
              <div>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <label>Registration Id</label>
                <input
                  type="text"
                  name="RegistrationId" // Add name attribute
                  placeholder="Registration ID"
                  value={loginData.RegistrationId}
                  onChange={handleChange}
                />
                <label>Password</label>
                <input
                  type="password"
                  name="Password" // Add name attribute
                  placeholder="Password"
                  value={loginData.Password}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  value="Staff"
                  checked={userType === "Staff"}
                  onChange={() => setUserType("Staff")}
                />
                Staff
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  value="Parents"
                  checked={userType === "Parents"}
                  onChange={() => setUserType("Parents")}
                />
                Parents
              </label>
            </div>
            <button onClick={handleLogin}>Login</button>
            <div className="footer">
              <p>
                don't have an account ?
                <Link to="/Register" className="register-footer">
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



