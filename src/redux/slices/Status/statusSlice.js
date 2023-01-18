import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const statusSlice = createSlice({
  name: "status",
  initialState: {
    loading: false,
    hasErrors: { error: false, detail: "" },
    dailyStatus: {
      toEmail: "",
      statusDate: "",
      billingHours: "",
      projectType: "",
      workingHours: "",
      statusType: "",
      task: "",
    },
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getStatus: (state) => {
      state.loading = true;
      state.hasErrors = { error: false, detail: "" };
    },
    addDailyStatusSuccess: (state, { payload }) => {
      state.dailyStatus = payload;
      state.loading = false;
      state.hasErrors = { error: false, detail: "" };
    },
    addDailyStatusFailure: (state) => {
      state.loading = false;
      state.hasErrors = { error: true, detail: "" };
    },
  },
});

export const {
  startLoading,
  getStatus,
  addDailyStatusSuccess,
  addDailyStatusFailure,
} = statusSlice.actions;

export const statusSelector = (state) => state.status;

export default statusSlice.reducer;

export const addDailyStatus = (data, callback) => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(addDailyStatusSuccess(data));
    const message = "Daily Status Applied";
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
  } catch (err) {
    dispatch(addDailyStatusFailure());
  }
};
