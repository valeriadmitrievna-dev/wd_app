import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});
