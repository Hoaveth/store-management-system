import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EMPTY_STRING } from "../../utils/constants";
import authService from "./authService";

const initialState = {
  user_auth: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  isAuthenticated: false,
  message: EMPTY_STRING,
};

//Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = EMPTY_STRING;
    },
    login_user: (state, action) => {
      state.user_auth = action.payload;
      state.isAuthenticated = true;
    },
    logout_user: (state, action) => {
      state.user_auth = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user_auth = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, login_user, logout_user } = authSlice.actions;

//export
export default authSlice.reducer;
