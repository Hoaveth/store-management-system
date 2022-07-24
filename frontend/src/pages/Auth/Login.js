import React, { useEffect, useState } from "react";
import { EMPTY_STRING } from "../../utils/constants";
import "./styles/Login.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: EMPTY_STRING,
    password: EMPTY_STRING,
  });
  const { userName, password } = formData;

  const { isAuthenticated } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="auth-inner">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            name="userName"
            className="form-control"
            placeholder="Enter username"
            onChange={handleInputChange}
            value={userName}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleInputChange}
            value={password}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          No account? <a href="/sign_up">Create an account now.</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
