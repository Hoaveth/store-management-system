import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_auth: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login_user: (state, action) => {
      state.user_auth = action.payload;
    },
    logout_user: (state, action) => {
      state.user_auth = null;
    },
  },
});

//export
export default authSlice.reducer;
