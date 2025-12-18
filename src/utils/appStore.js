import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // adjust path if needed

// Central Redux store for the application
const appStore = configureStore({
  reducer: {
    user: userReducer, // user state will be available as store.user
  },
});

export default appStore;
