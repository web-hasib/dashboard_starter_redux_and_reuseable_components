import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface UserState {
 
  user: UserProfile | null;
  token: string | null;
  refreshToken: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  refreshToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: UserProfile;
        token: string;
        refreshToken?: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken ?? null;

      const isSecure = typeof window !== "undefined" && window.location.protocol === "https:";

      // set main token
      Cookies.set("token", action.payload.token, {
        secure: isSecure,
        sameSite: "strict",
        expires: 7,
        path: "/",
      });

      // set refresh token if exists
      if (action.payload.refreshToken) {
        Cookies.set("refreshToken", action.payload.refreshToken, {
          secure: isSecure,
          sameSite: "strict",
          expires: 7,
          path: "/",
        });
      }
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;

      const isSecure = typeof window !== "undefined" && window.location.protocol === "https:";

      Cookies.remove("token", { path: "/", secure: isSecure });
      Cookies.remove("refreshToken", { path: "/", secure: isSecure });
    },
  },
});


export const { setCredentials,  logout } = userSlice.actions;
export default userSlice.reducer;
