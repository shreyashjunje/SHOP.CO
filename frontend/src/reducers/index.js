import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducers from "../slices/authSlice"

const rootReducer = combineReducers({
  auth: authReducers,
});

export default rootReducer;