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
    getAccountSuccess: (state, { payload }) => {
      state.accounts = payload;
      state.loading = false;
      state.hasErrors = { error: false, detail: "" };
    },
    getAccountFailure: (state) => {
      state.loading = false;
      state.hasErrors = { error: true, detail: "" };
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

    if (response.data.message === "Account created successfully") {
      const message = "Account Created";
      dispatch(getAccountSuccess(response.data));
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
    if (error.response.data.error === "record not unique") {
      const message2 = "User already exist";
      toast(message2, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error",
      });
      dispatch(getAccountFailure());
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

      var segments = response.data.token.split(".");
      if (segments.length !== 3) {
        console.log(segments.length);
        throw new Error("Not enough or too many segments");
      }
      if (response.data.role === "admin") {
        setRole("admin");
      } else {
        setRole("employee");
      }
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
      dispatch(getAccountSuccess(response.data));

      if (callback) callback();
    }
  } catch (error) {
    if (error.response.status === 401) {
      const message = "Login error";
      if (error.response.data.msg === "unauthorized request") {
        toast(message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "error",
        });
        dispatch(getAccountFailure());
      }
      if (error.response.data.msg === "email/password is wrong") {
        const message = "email/password is wrong";
        toast(message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "warning",
        });
        dispatch(getAccountFailure());
      }
    }
  }
};

export const logOutUser = (callback) => async (dispatch) => {
  try {
    clearToken("token");
    clearUserId("user-id");
    clearRole("role");
    setRole("guest");
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
