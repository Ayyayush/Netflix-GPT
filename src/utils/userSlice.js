import { createSlice } from "@reduxjs/toolkit";

// User slice for storing authenticated user data
const userSlice = createSlice({
  name: "user",

  // Initial state is null because user is not logged in initially
  initialState: null,

  reducers: {
    // Adds user data to the Redux store
    addUser: (state, action) => {
      return action.payload; // payload contains user object
    },

    // Removes user data (on logout)
    removeUser: () => {
      return null;
    },
  },
});

// Export actions to be used in components
export const { addUser, removeUser } = userSlice.actions;

// Export reducer to be added to store
export default userSlice.reducer;
