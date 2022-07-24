import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout_user } from "../features/auth/authSlice";

import "./styles/Sidebar.css";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutWithRedirect = async () => {
    await dispatch(logout_user());
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* Avatar and username later */}
          <p>Hello, User 1 </p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/dashboard">
                <span>Dashboard</span>
              </NavLink>
              <NavLink to="/credit_management">
                <span>Credit Management</span>
              </NavLink>
              <NavLink to="/check_management">
                <span>Check Management</span>
              </NavLink>
              <button onClick={() => logoutWithRedirect()}>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
