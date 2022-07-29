import { PERSISTED_STATE_KEY } from "../../utils/constants";
import apiService from "../../utils/apiService";
import { USERS_API } from "../../utils/api";

//Register User
const login = async (userData) => {
  const response = await apiService.post(USERS_API + "login", userData);

  //save token to localstorage
  const jwt_token = response.data.token;
  localStorage.setItem("access_token", jwt_token);

  return response.data;
};

//Register User
const register = async (userData) => {
  const response = await apiService.post(USERS_API + "register", userData);
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
