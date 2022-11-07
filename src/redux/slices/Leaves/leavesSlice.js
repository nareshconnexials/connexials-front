import { createSlice } from "@reduxjs/toolkit";
// import axios from "../../axios";
// import { formatProfileApiData } from "./formatFunction";

export const leavesSlice = createSlice({
  name: "leaves",
  initialState: {
    loading: false,
    hasErrors: { error: false, detail: "" }, 
    leaveData:[], 
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getUsersLeaves: (state) => {
      state.loading = true;
      state.hasErrors = { error: false, detail: "" };
    },
    getUsersLeaveSuccess: (state, { payload }) => {
      state.leaveData = [...state.leaveData,payload];
      state.loading = false;
      state.hasErrors = false
    },
    getUsersLeaveFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload || { error: true, detail: "" };
    },  
  },
});

export const {
  startLoading,
  getUsersLeaves, 
  getUsersLeaveSuccess,
  getUsersLeaveFailure,

} = leavesSlice.actions;

export const leavesSelector = (state) => state.leaves;

export default leavesSlice.reducer; 

export const getLeaveData = (data) => async (dispatch) => {
  try {
    dispatch(startLoading());
    console.log();
    dispatch(getUsersLeaveSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(getUsersLeaveFailure());
  }
};
 