import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import checkService from "./checkService";

const initialState = {
  checks: [],
  isLoading: false,
  isSuccess: false,
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

const checkSlice = createSlice({
  name: "checks",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
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
        state.isSuccess = true;
        state.checks.push(action.payload);
      })
      .addCase(addCheckTransaction.rejected, (state, action) => {
        console.log("Dsdsds", action);
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { reset } = checkSlice.actions;

//export
export default checkSlice.reducer;
