import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import persistedReducer from "../reducers";

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export default store;
