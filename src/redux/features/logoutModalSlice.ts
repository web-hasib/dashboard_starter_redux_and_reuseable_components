import { createSlice } from "@reduxjs/toolkit";

interface LogoutModalState {
  isOpen: boolean;
}

const initialState: LogoutModalState = { isOpen: false };

export const logoutModalSlice = createSlice({
  name: "logoutModal",
  initialState,
  reducers: {
    openLogoutModal: (state) => {
      state.isOpen = true;
    },
    closeLogoutModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openLogoutModal, closeLogoutModal } = logoutModalSlice.actions;
export default logoutModalSlice.reducer;
