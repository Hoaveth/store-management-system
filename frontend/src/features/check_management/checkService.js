import apiService from "../../utils/apiService";
import { CHECK_MGT_API } from "../../utils/api";

//Register check
const addCheckTransaction = async (checkData) => {
  const response = await apiService.post(
    CHECK_MGT_API + "add_check_transaction",
    checkData
  );
  return response.data;
};

//Update check
const updateCheckTransaction = async (checkData) => {
  const response = await apiService.put(
    CHECK_MGT_API + "update_check_transaction",
    checkData
  );
  return response.data;
};

//Delete check
const deleteCheckTransaction = async (checkData) => {
  const response = await apiService.delete(
    CHECK_MGT_API + "delete_check_transaction",
    checkData
  );
  return response.data;
};

//Get check
const getCheckTransaction = async (checkData) => {
  const response = await apiService.get(
    CHECK_MGT_API + "get_check_transaction",
    checkData
  );
  return response.data;
};

//All check
const getAllCheckTransaction = async () => {
  const response = await apiService.get(
    CHECK_MGT_API + "get_all_check_transaction"
  );
  return response.data;
};

const checkService = {
  addCheckTransaction,
  updateCheckTransaction,
  deleteCheckTransaction,
  getCheckTransaction,
  getAllCheckTransaction,
};

export default checkService;
