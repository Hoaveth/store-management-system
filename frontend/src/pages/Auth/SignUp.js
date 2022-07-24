import React, { useState } from "react";
import { EMPTY_STRING } from "../../utils/constants";
import "./styles/Sign_Up.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    userName: EMPTY_STRING,
    password: EMPTY_STRING,
    password2: EMPTY_STRING,
  });

  const { firstName, lastName, userName, password, password2 } = formData;

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-inner">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
            value={lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            name="userName"
            className="form-control"
            placeholder="Enter username"
            value={userName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password2"
            className="form-control"
            placeholder="Confirm password"
            value={password2}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign_in">Sign in.</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
