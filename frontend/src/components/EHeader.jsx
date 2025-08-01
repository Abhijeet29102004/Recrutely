import React from "react";
import bell from "/assets/bell.png";
import moon from "/assets/moon.png";
import profilepic from "/assets/unnamed.png";
import menu from "/assets/menu.png";
import "./EHeader.css"; 
import { Link, useLocation } from "react-router-dom";





const EHeader = () => {
  const location = useLocation(); // <-- get current location

  // Function to get header content based on route
  const getHeaderContent = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Welcome to your dashboard";
      case "/profile":
        return "Here is your profile";
      case "/application":
        return "Here are your applications";
      case "/jobs":
        return "Here are your jobs";
      case "/rdashboard":
        return "Welcome Employer";
      case "/jobdesc":
        return "Here is your job details";
      default:
        return "";
    }
  };

  return (
    <header className="header-g">
      <div className="header-left-g">
       
        <div className="welcome-text-g">
          <h2>Welcome back, Employer!</h2>
          {/* <p>Here is your job details</p> */}
          <p>{getHeaderContent()}</p>

        </div>
      </div>
      <div className="header-right-g">
        <img src={bell} alt="bell" />
        <img src={moon} alt="moon" />
        <Link to="/employer/rprofile">
          <img src={profilepic} alt="profile" className="profile-g" />
        </Link>
      </div>
    </header>
  );
};

export default EHeader;
