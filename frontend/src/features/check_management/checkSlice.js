import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import checkService from "./checkService";

const initialState = {
  checkTransactions: [],
  isLoading: false,
  isFetchSuccess: false,
  isAddSuccess: false,
  isError: false,
  error: null,
};

//Register user
export const addCheckTransaction = createAsyncThunk(
  "check_management/add_check_transaction",
  async (user, thunkAPI) => {
    try {
      return await checkService.addCheckTransaction(user);
    } catch (error) {
      const errorResponse =
        error.response && error.response.data && error.response.data;
      return thunkAPI.rejectWithValue(errorResponse);
    }
  }
);

//Register user
export const getAllCheckTransactions = createAsyncThunk(
  "check_management/get_all_check_transaction",
  async (data, thunkAPI) => {
    try {
      return await checkService.getAllCheckTransaction();
    } catch (error) {
      const errorResponse =
        error.response && error.response.data && error.response.data;
      return thunkAPI.rejectWithValue(errorResponse);
    }
  }
);

const checkSlice = createSlice({
  name: "checks",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isFetchSuccess = false;
      state.isAddSuccess = false;
      state.isError = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCheckTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCheckTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAddSuccess = true;
        state.checkTransactions.push(action.payload);
      })
      .addCase(addCheckTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getAllCheckTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCheckTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFetchSuccess = true;
        state.checkTransactions = action.payload;
      })
      .addCase(getAllCheckTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { reset } = checkSlice.actions;

//export
export default checkSlice.reducer;
