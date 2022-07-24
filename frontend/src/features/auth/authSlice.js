import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_auth: null,
  isLoading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login_user: (state, action) => {
      state.user_auth = action.payload;
      state.isAuthenticated = true;
    },
    logout_user: (state, action) => {
      state.user_auth = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login_user, logout_user } = authSlice.actions;

//export
export default authSlice.reducer;
