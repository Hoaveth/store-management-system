import axios from "axios";

const API_URL = "api/users/";

//Register User
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  return response.data;
};

const authService = {
  register,
};

export default authService;
