import { createSlice } from "@reduxjs/toolkit";
import {
  clearRole,
  clearToken,
  clearUserId,
  setRole,
  setToken,
  setUserId,
} from "../../../helpers/Utils";
import axios from "../../axios";
import { formatLoginApiData, formatSignUpApiData } from "./formatFunctions";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    loading: false,
    hasErrors: { error: false, detail: "" },
    accounts: {},
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getAccount: (state) => {
      state.loading = true;
      state.hasErrors = { error: false, detail: "" };
    },
    getAccountSuccess: (state, { payload }) => {
      state.accounts = payload;
      state.loading = false;
      state.hasErrors = { error: false, detail: "" };
    },
    getAccountFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload;
    },
  },
});

export const {
  startLoading,
  getAccount,
  getAccountSuccess,
  getAccountFailure,
} = accountsSlice.actions;

export const accountsSelector = (state) => state.accounts;

export default accountsSlice.reducer;

export const signUpUser = (data, callback) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const response = await axios.post(
      "users/registration",
      formatSignUpApiData(data)
    );

    if (response.data.msg === "success") {
      dispatch(getAccountSuccess(response.data));
    }

    if (callback) callback();
  } catch (error) {
    dispatch(
      getAccountFailure({ error: true, detail: error.response.data.msg })
    );
  }
};

export const loginUser = (data, callback) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.post(
      "users/sessions",
      formatLoginApiData(data)
    );
    const role = ["admin", "employee"]
    if (response.data.msg === "success") {
      setToken(response.data.token);
      setUserId(response.data.user_id);

      // if(role.includes("employee")){
      //   setRole("admin");
      // }else{
        // }
        setRole("admin");

      dispatch(getAccountSuccess(response.data));
      if (callback) callback();
    }
  } catch (error) {
    if (error.response.status === 401) {
      console.log(error);
      dispatch(
        getAccountFailure({ error: true, detail: error.response.data.msg })
      );
    }
  }
};

export const logOutUser = (callback) => async (dispatch) => {
  try {
    clearToken("token");
    clearUserId("user-id");
    clearRole("role");
    if (callback) callback();
  } catch (error) {
    dispatch(getAccountFailure());
  }
};

export const forgotPassword = (data, callback) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const response = await axios.post(
      "users/sessions",
      formatLoginApiData(data)
    );

    setToken(response.data.token);
    if (response.data.msg === "success") {
      dispatch(getAccountSuccess(response.data));
    }

    if (callback) callback();
  } catch (error) {
    dispatch(getAccountFailure());
  }
};
