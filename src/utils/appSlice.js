import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleSwitch: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeSwitch: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleSwitch, closeSwitch } = appSlice.actions;
export default appSlice.reducer;
