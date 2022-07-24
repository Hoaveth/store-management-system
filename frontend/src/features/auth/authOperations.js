import { createAsyncThunk } from "@reduxjs/toolkit";
import { login_user } from "./authSlice";

export const loginUser = createAsyncThunk(
  "auth/login_user",
  async ({ username, password }, thunkAPI) => {
    thunkAPI.dispatch(login_user({ userId: 5, userName: "Justine" }));

    //service call
    //dispatch
  }
);
