import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
    getAccountSuccess: (state, { payload }, message) => {
      state.accounts = payload;
      state.loading = false;
      state.hasErrors = { error: false, detail: "" };
      if (state.hasErrors.error === false) {
        toast("Account Login", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "success",
        });
      }
    },
    getAccountFailure: (state, message) => {
      state.loading = false;
      state.hasErrors = { error: true, detail: "" };
      if (state.hasErrors.error === true) {
        toast(message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "error",
        });
      }
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
      console.log(response.data);
      const message = "Account Created";
      dispatch(getAccountSuccess(response.data, message));
      if (callback) callback();
    }
  } catch (error) {
    if (error.response.status === 401) {
      const message = "Signup error";
      dispatch(getAccountFailure(message));
    }
  }
};

export const loginUser = (data, callback) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.post(
      "users/sessions",
      formatLoginApiData(data)
    );

    if (response.data.msg === "success") {
      const message = "Account Login";
      setToken(response.data.token);
      setUserId(response.data.user_id);
      if (response.data.role === "admin") {
        setRole("admin");
      } else {
        setRole("employee");
      }
      dispatch(getAccountSuccess(response.data, message));
      if (callback) callback();
    }
  } catch (error) {
    // if (error.response.status === 401) {
    const message = "Login error";
    console.log(error.response.data);
    if (error.response.data.msg === "unauthorized request") {
      dispatch(getAccountFailure(message));
    }
    // }
  }
};

export const logOutUser = (callback) => async (dispatch) => {
  try {
    clearToken("token");
    clearUserId("user-id");
    clearRole("role");
    if (callback) callback();
  } catch (error) {
    dispatch(getAccountFailure(""));
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
