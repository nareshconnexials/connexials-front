import { createSlice } from "@reduxjs/toolkit";

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState: { attendanceData: [] },
  reducers: {
    addEmployeeAttendance: (state, { payload }) => {
      if (
        payload?.checkIn === undefined &&
        payload?.checkOut === undefined &&
        payload?.day === undefined &&
        payload?.date === undefined &&
        payload?.workingHours === undefined
      ) {
        //eslint-disable-next-line
        const tempVar = state.attendanceData.forEach((element, index, arr) => {
          arr[index].checkIn = payload?.checkIn;
          arr[index].checkOut = payload?.checkOut;
          arr[index].day = payload?.day;
          arr[index].date = payload?.date;
          arr[index].workingHours = payload?.workingHours;
        });
      } else {
        state.attendanceData = [...state.attendanceData, payload];
      }
    },
  },
});

export const { addEmployeeAttendance } = attendanceSlice.actions;

export const attendanceSelector = (state) => state.attendance;

export default attendanceSlice.reducer;

export const addEmployeeAttendanceData =
  ({ checkIn, checkOut, day, date, workingHours }) =>
  async (dispatch) => {
    try {
      await dispatch(
        addEmployeeAttendance({
          checkIn: checkIn,
          checkOut: checkOut,
          day: day,
          date: date,
          workingHours: workingHours,
        })
      );
    } catch (err) {}
  };
