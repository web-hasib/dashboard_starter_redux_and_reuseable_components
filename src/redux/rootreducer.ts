import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { baseApi } from "./api/baseApi";
import logoutReducer from "./features/logoutModalSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  logoutModal: logoutReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
