import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EMPTY_STRING } from "../../utils/constants";
import checkService from "./checkService";

const initialState = {
  checks: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: EMPTY_STRING,
};

//Register user
export const addCheckTransaction = createAsyncThunk(
  "check_management/add_check_transaction",
  async (user, thunkAPI) => {
    try {
      return await checkService.login(user);
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

const checkSlice = createSlice({
  name: "checks",
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
      .addCase(addCheckTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCheckTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.checks.push(action.payload);
      })
      .addCase(addCheckTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = checkSlice.actions;

//export
export default checkSlice.reducer;
