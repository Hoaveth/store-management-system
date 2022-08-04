import apiService from "../../utils/apiService";
import { CHECK_MGT_API } from "../../utils/api";

//Register Supplier
const addSupplier = async (supplierData) => {
  const response = await apiService.post(
    CHECK_MGT_API + "add_supplier",
    supplierData
  );
  return response.data;
};

//Update Supplier
const updateSupplier = async (supplierData) => {
  const response = await apiService.put(
    CHECK_MGT_API + "update_supplier",
    supplierData
  );
  return response.data;
};

//Delete Supplier
const deleteSupplier = async (supplierData) => {
  const response = await apiService.delete(
    CHECK_MGT_API + "delete_supplier",
    supplierData
  );
  return response.data;
};

//Get supplier
const getSupplier = async (supplierId) => {
  const response = await apiService.get(
    CHECK_MGT_API + `get_supplier?supplierId=${supplierId}`
  );
  return response.data;
};

//All Supplier
const getAllSupplier = async () => {
  const response = await apiService.get(CHECK_MGT_API + "get_all_supplier");
  return response.data;
};

const supplierService = {
  addSupplier,
  updateSupplier,
  deleteSupplier,
  getSupplier,
  getAllSupplier,
};

export default supplierService;
