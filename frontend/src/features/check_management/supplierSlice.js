import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EMPTY_STRING } from "../../utils/constants";
import supplierService from "./supplierService";

const initialState = {
  suppliers: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: EMPTY_STRING,
};

//Register user
export const addSupplier = createAsyncThunk(
  "check_management/add_supplier",
  async (supplier, thunkAPI) => {
    try {
      return await supplierService.addSupplier(supplier);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get suppliers
export const getAllSuppliers = createAsyncThunk(
  "check_management/get_all_suppliers",
  async ({}, thunkAPI) => {
    try {
      return await supplierService.getAllSupplier();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = EMPTY_STRING;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSupplier.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSupplier.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.suppliers.push(action.payload);
      })
      .addCase(addSupplier.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = supplierSlice.actions;

//export
export default supplierSlice.reducer;
