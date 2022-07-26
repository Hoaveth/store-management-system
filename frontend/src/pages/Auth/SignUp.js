import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_STRING, ROLE_USER } from "../../utils/constants";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";

import "./styles/Sign_Up.css";
import Spinner from "../../components/Spinner";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    userName: EMPTY_STRING,
    password: EMPTY_STRING,
    password2: EMPTY_STRING,
  });

  const { firstName, lastName, userName, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_auth, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user_auth) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user_auth, isError, isSuccess, message, dispatch, navigate]);

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        userName,
        password,
        role: ROLE_USER,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
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
