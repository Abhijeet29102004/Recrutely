import React from "react";
import "./Sidebar.css";
import { useSidebar } from "../context/SidebarContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaBriefcase,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink,useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
    const navigate = useNavigate();

   const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="arrow" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </div>

      <div className="sidebar-header">
        <div className="avatar-circle">CD</div>
        <div>
          <h1 className="sidebar-title">Candidate</h1>
          <p className="sidebar-subtitle">Dashboard</p>
        </div>
      </div>

      {/* Navigation items */}
      <nav className="sidebar-nav">
        <ul>
          <NavLink
            className="nav-item"
            to="/candidate/dashboard"
            activeClassName="active"
          >
            <FaHome className="nav-img-icon" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink className="nav-item" to="/candidate/profile" activeClassName="active">
            <FaUser className="nav-img-icon" />
            <span>Profile</span>
          </NavLink>
          <NavLink
            className="nav-item"
            to="/candidate/application"
            activeClassName="active"
          >
            <FaClipboardList className="nav-img-icon" />
            <span>Applications</span>
          </NavLink>
          <NavLink className="nav-item" to="/candidate/jobs" activeClassName="active">
            <FaBriefcase className="nav-img-icon" />
            <span>Jobs</span>
          </NavLink>
        </ul>
      </nav>

      {/* Logout */}
      <div className="sidebar-footer" onClick={handleLogout}>
        <FaSignOutAlt className="nav-img-icon"   />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
