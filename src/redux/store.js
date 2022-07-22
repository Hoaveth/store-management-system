import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//reducers
import authReducer from "../pages/Auth/features/authSlice";

//set all reducer
const reducer = {
  auth: authReducer,
};

//setup store
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
