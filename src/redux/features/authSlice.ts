
import { CreateNewAccountTypes, LogInUserTypes } from "@/src/types/auth/authTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface DecodedUser {
  id: string;
  email: string;
  role?: string;
  iat?: number;
  exp?: number;
}
interface AuthState {
  role: string;
  employeType: string;
  user: { id: string; name: string; email: string } | null;
  createNewAccount: CreateNewAccountTypes | null;
  login: LogInUserTypes;

  loggedUser: DecodedUser | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  role: "",
  employeType: "",
  user: { id: "1", name: "Mk", email: "" },
  createNewAccount: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  login: { email: "", password: "" },

  loggedUser: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<string>) => {

      console.log("payload",action)
      const token = action.payload;
      state.accessToken = token;

      try {
        const decoded = jwtDecode<DecodedUser>(token);
        state.loggedUser = decoded;
      } catch (err) {
        console.error("Failed to decode token:", err);
        state.user = null;
      }
    },
    // Set User Creating Data
    setCreateAccount: (state, action: PayloadAction<CreateNewAccountTypes>) => {
      state.createNewAccount = action.payload;
    },
    // Set User Log In Data
    setlogin: (state, action: PayloadAction<LogInUserTypes>) => {
      state.login = action.payload;
    },
    // Set User Type
    setUserRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    // Set User position
    setemployeType: (state, action: PayloadAction<string>) => {
      state.employeType = action.payload;
    },
  },
});

export const {
  setCredentials,
  setCreateAccount,
  setlogin,
  setUserRole,
  setemployeType,
} = authSlice.actions;
export default authSlice.reducer;
