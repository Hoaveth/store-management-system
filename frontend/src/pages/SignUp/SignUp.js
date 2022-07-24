import React, { useState } from "react";
import { EMPTY_STRING } from "../../utils/constants";
import "./Sign_Up.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState(EMPTY_STRING);
  const [lastName, setLastName] = useState(EMPTY_STRING);
  const [username, setUsername] = useState(EMPTY_STRING);
  const [password, setPassword] = useState(EMPTY_STRING);

  return (
    <div className="auth-inner">
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
