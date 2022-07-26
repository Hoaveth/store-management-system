import React, { useEffect, useState } from "react";
import { EMPTY_STRING } from "../../utils/constants";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { login, reset } from "../../features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: EMPTY_STRING,
    password: EMPTY_STRING,
  });
  const { userName, password } = formData;

  const { isAuthenticated, user_auth, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user_auth) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [
    user_auth,
    isAuthenticated,
    isError,
    isSuccess,
    message,
    dispatch,
    navigate,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userName,
      password,
    };

    dispatch(login(userData));
  };

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (user_auth) {
    return;
  } else {
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
  }
};

export default Login;
