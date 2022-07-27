import axios from "axios";
import { PERSISTED_STATE_KEY } from "../../utils/constants";
import apiService from "../../utils/apiService";
const API_URL = "api/users/";

//Register User
const login = async (userData) => {
  const response = await apiService.post(API_URL + "login", userData);
  return response.data;
};

//Register User
const register = async (userData) => {
  const response = await apiService.post(API_URL + "register", userData);
  return response.data;
};

//Logout User
const logout = async () => {
  localStorage.removeItem(PERSISTED_STATE_KEY);
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
