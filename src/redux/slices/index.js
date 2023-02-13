import { combineReducers } from "@reduxjs/toolkit";
import accountReducer from "../slices/Accounts/accountSlice";
import usersReducer from "../slices/Users/usersSlice";
import leaveReducer from "../slices/Leaves/leavesSlice";
import sidebarReducer from "../slices/Sidebar/sidebarSlice";
import statusReducer from "../slices/Status/statusSlice";
import payslipReducer from "../slices/Payslip/payslipSlice";
import attendanceReducer from "../slices/Attendance/attendanceSlice";

const rootReducer = combineReducers({
  accounts: accountReducer,
  users: usersReducer,
  leaves: leaveReducer,
  sidebar: sidebarReducer,
  status: statusReducer,
  payslip: payslipReducer,
  attendance: attendanceReducer,
});

export default rootReducer;
