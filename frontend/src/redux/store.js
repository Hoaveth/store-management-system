import { configureStore } from "@reduxjs/toolkit";

//reducers
import authReducer from "../features/auth/authSlice";
import supplierReducer from "../features/check_management/supplierSlice";
import checkReducer from "../features/check_management/checkSlice";

import logger from "redux-logger";
import throttle from "lodash/throttle";
import { PERSISTED_STATE_KEY } from "../utils/constants";

//set all reducer
const reducer = {
  auth: authReducer,
  suppliers: supplierReducer,
  checks: checkReducer,
};

//Store methods
const loadState = () => {
  try {
    const serializedState = localStorage.getItem(PERSISTED_STATE_KEY);
    return null === serializedState ? undefined : JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem(PERSISTED_STATE_KEY, JSON.stringify(state));
  } catch (e) {}
};

//setup store
const store = configureStore({
  reducer,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default function setupStore() {
  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }),
    1000
  );
  return store;
}
