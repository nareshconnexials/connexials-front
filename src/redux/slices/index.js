import {combineReducers} from '@reduxjs/toolkit';
import accountReducer from "../slices/Accounts/accountSlice"
import usersReducer from "../slices/Users/usersSlice"
import leaveReducer from "../slices/Leaves/leavesSlice"

const rootReducer = combineReducers({
    accounts:accountReducer,
    users:usersReducer,
    leaves:leaveReducer
});

export default rootReducer;
