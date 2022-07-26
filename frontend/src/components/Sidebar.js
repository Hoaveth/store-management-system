import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

import "./styles/Sidebar.css";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user_auth } = useSelector((state) => state.auth);

  const handleLogout = () => {
    //Remove localstorage item
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* Avatar and username later */}
          <p>Hello, {user_auth.userName} </p>
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
              <button onClick={() => handleLogout()}>
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
