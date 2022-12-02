import { createSlice } from "@reduxjs/toolkit";

export const payslipSlice = createSlice({
  name: "payslip",
  initialState: {
    pdfData: {},
  },
  reducers: {
    getPdfDataInHtml: (state, { payload }) => {
      state.pdfData = payload;
    },
  },
});

export const { getPdfDataInHtml } = payslipSlice.actions;

export const payslipSelector = (state) => state.payslip;

export default payslipSlice.reducer;

export const getPdfData = (isOpen, callback) => async (dispatch) => {
  try {
    dispatch(getPdfDataInHtml(isOpen));
    if (callback) callback();
  } catch (err) {}
};
