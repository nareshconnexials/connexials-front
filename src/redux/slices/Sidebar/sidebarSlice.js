import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarOpen: false,
  },
  reducers: {
    setIsSidebarOpen: (state, {payload}) => {
      state.isSidebarOpen = payload;
    },
  },
});

export const { setIsSidebarOpen } = sidebarSlice.actions;

export const sidebarSelector = (state) => state.sidebar;

export default sidebarSlice.reducer;

export const toggleSidebar = (isOpen) => async (dispatch) => {
  dispatch(setIsSidebarOpen(isOpen));
};

export const closeSidebar = () => async (dispatch) => {
  dispatch(setIsSidebarOpen(false));
};
