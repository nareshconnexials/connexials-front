import { createSlice } from "@reduxjs/toolkit";

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState: {
    attendanceData: [],
  },
  reducers: {
    addEmployeeAttendance: (state, { payload }) => {
      // state.attendanceData = state.attendance.concat(payload);
      // if (state.attendanceData.length === 0) {
      //   state.attendanceData = payload;
      //   console.log(state.attendanceData);
      // }
      // const newArray = state.attendanceData.map((atData) => {
      // console.log("attendanceData", state.attendanceData);
      // console.log("payload", payload);

      if (payload.checkInOut.checkOut) {
        let newAp = [];
        const newArray = state.attendanceData?.forEach((element, index) => {
          console.log('Hello',element);
          if (element.checkInOut.checkOut === "") {
            newAp[index] = payload;
            newAp[index].checkOut = payload.checkInOut.checkOut;
          }
          else{
            newAp[index] = payload
          }
        });
        console.log('newArray',newAp);
        state.attendanceData = newAp;
      } else {
        state.attendanceData = [...state.attendanceData, payload];
      }

      // if (
      //   payload.checkInOut.checkIn !== "" &&
      //   payload.checkInOut.checkOut !== "" &&
      //   payload.day !== "" &&
      //   payload.date !== "" &&
      //   payload.workingHours !== ""
      // ) {
      //   state.attendanceData = [...state.attendanceData, payload];
      // } else {
      //   state.attendanceData = [];
      // }
      // console.log(payload);
      // });
      // state.attendanceData = newArray;
    },
    getEmployeeAttendance: (state, { payload }) => {
      state.attendanceData = payload;
    },
    addCheckInOutAttendance: (state, { payload }) => {},
  },
});

export const {
  addEmployeeAttendance,
  getEmployeeAttendance,
  addCheckInOutAttendance,
} = attendanceSlice.actions;

export const attendanceSelector = (state) => state.attendance;

export default attendanceSlice.reducer;

export const addEmployeeAttendanceData =
  (checkInOut, day, date, workingHours) => async (dispatch) => {
    try {
      dispatch(addEmployeeAttendance({ checkInOut, day, date, workingHours }));
    } catch (err) {}
  };

export const getEmployeeAttendanceData = () => async (dispatch) => {
  try {
    dispatch(getEmployeeAttendance());
  } catch (err) {}
};

export const addCheckInOutAttendanceData = (data) => async (dispatch) => {
  try {
    // dispatch(addCheckInAttendance());
    console.log(data);
  } catch (err) {}
};
