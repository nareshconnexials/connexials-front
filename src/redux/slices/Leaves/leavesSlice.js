import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../../axios";
import {
  formatGetLeaveData,
  formatGetLeaveDataById,
  formatLeaveModalData,
} from "./formatFunction";

export const leavesSlice = createSlice({
  name: "leaves",
  initialState: {
    loading: false,
    hasErrors: { error: false, detail: "" },
    leaveData: [],
    userLeaveData: {
      id: "",
      userId: "",
      fromDate: "",
      toDate: "",
      fromSession: "",
      toSession: "",
      days: "",
      mailTo: "",
      reason: "",
    },
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getUsersLeaves: (state) => {
      state.loading = true;
      state.hasErrors = { error: false, detail: "" };
    },
    addUsersLeaveSuccess: (state, { payload }) => {
      state.leaveData = state.leaveData.concat(payload);
      state.loading = false;
      state.hasErrors = false;
    },
    addUsersLeaveFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload || { error: true, detail: "" };
    },
    getUsersLeaveSuccess: (state, { payload }) => {
      state.leaveData = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersLeaveFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload || { error: true, detail: "" };
    },
    getUsersLeaveSuccessById: (state, { payload }) => {
      state.userLeaveData = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersLeaveFailureById: (state, { payload }) => {
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
  addUsersLeaveSuccess,
  addUsersLeaveFailure,
  getUsersLeaveInDays,
  getUsersLeaveSuccessById,
  getUsersLeaveFailureById,
} = leavesSlice.actions;

export const leavesSelector = (state) => state.leaves;

export default leavesSlice.reducer;

export const addLeaveData = (data, callback) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.post(
      "users/leaves",
      formatLeaveModalData(data)
    );

    if (response.data.message === "Leave created successfully") {
      dispatch(addUsersLeaveSuccess(data));
      const message = "Leave Applied";
      toast(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success",
      });
      if (callback) callback();
    }
  } catch (error) {
    dispatch(addUsersLeaveFailure());
    if (error) {
      const message = "Leave failed";
      toast(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success",
      });
    }
  }
};

export const getUserLeaveData = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.get("users/leaves");
    dispatch(getUsersLeaveSuccess(formatGetLeaveData(response.data).leaveData));
  } catch (error) {
    dispatch(getUsersLeaveFailure());
  }
};

export const getUserLeaveDataById = (leaveId) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`users/leaves/${leaveId}`);
    dispatch(getUsersLeaveSuccessById(formatGetLeaveDataById(response.data)));
  } catch (error) {
    dispatch(getUsersLeaveFailureById());
  }
};
