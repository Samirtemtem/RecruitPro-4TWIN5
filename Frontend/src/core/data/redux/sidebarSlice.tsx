import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileSidebar: false,
  miniSidebar: false,
  expandMenu: false,
};
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setMobileSidebar: (state, { payload }) => {
      state.mobileSidebar = payload;
    },
    setMiniSidebar: (state, { payload }) => {
      state.miniSidebar = payload;
    },
    toggleMiniSidebar: (state) => {
      state.miniSidebar = !state.miniSidebar;
    },
    setExpandMenu: (state, { payload }) => {
      state.expandMenu = payload;
    },
  },
});

export const { setMobileSidebar, setMiniSidebar, setExpandMenu, toggleMiniSidebar } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
