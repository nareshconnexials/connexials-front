import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { formatProfileApiData } from "./formatFunction";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    hasErrors: { error: false, detail: "" }, 
    usersData:[],
    profile:{}
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getUsers: (state) => {
      state.loading = true;
      state.hasErrors = { error: false, detail: "" };
    },
    getUsersSuccess: (state, { payload }) => {
      state.usersData = payload;
      state.loading = false;
      state.hasErrors = false
    },
    getUsersFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload || { error: true, detail: "" };
    }, 
    getUserProfileSuccess: (state, {payload}) => {
      state.profile = payload;
      state.loading = false;
      state.hasErrors = false
    },
    getUserProfileFailure: (state, {payload}) => {
      state.loading = false;
      state.hasErrors = payload || { error: true, detail: "" };
    },
  },
});

export const {
  startLoading,
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  getUserProfileSuccess,
  getUserProfileFailure
} = usersSlice.actions;

export const usersSelector = (state) => state.users;

export default usersSlice.reducer; 

export const getUsersData = () => async (dispatch) => {
  try {
    dispatch(startLoading());

    const response = await axios.get('users/list');

    dispatch(getUsersSuccess(response.data));
  } catch (error) {
    dispatch(getUsersFailure());
  }
};


export const getUserProfileData = (userId) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const response = await axios.get(`users/profiles/${userId}`);

    dispatch(getUserProfileSuccess(formatProfileApiData(response.data)));
  } catch (error) {
    dispatch(getUserProfileFailure());
  }
};

