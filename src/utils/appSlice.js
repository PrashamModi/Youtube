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
  },
});

export const { toggleSwitch } = appSlice.actions;
export default appSlice.reducer;
