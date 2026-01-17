// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    loggedUser: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.loggedUser = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
