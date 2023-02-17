import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { Label, Input, Button } from "@windmill/react-ui";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAccountSchema } from "../redux/validation/accountValidation";
import {
  accountsSelector,
  loginUser,
} from "../redux/slices/Accounts/accountSlice";
import { getRole } from "../helpers/Utils";

function Login() {
  const loginDetails = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: loginDetails,
    validationSchema: loginAccountSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    dispatch(loginUser(values, closeLoginPage));
  };

  const closeLoginPage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex items-start min-h-screen p-12 my-[5rem] bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-fit max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src={ImageLight}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src={ImageDark}
                alt="Office"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <form method="POST" onSubmit={formik.handleSubmit}>
                  <h1 className="mb-4 text-4xl font-semibold text-gray-700 dark:text-gray-200">
                    Login
                  </h1>
                  <Label>
                    <span className="text-base font-medium">Email</span>
                    <Input
                      className={`mt-1 py-[5px] ${
                        formik.errors.email
                          ? "shadow-sm shadow-red-400 transition-shadow"
                          : ""
                      }`}
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <span className="text-sm text-red-600">
                      {formik.errors.email ? formik.errors.email : null}
                    </span>
                  </Label>

                  <Label className="mt-4 py-[5px]">
                    <span className="text-base font-medium">Password</span>
                    <Input
                      className={`mt-1 ${
                        formik.errors.password
                          ? "shadow-sm shadow-red-400 transition-shadow"
                          : ""
                      }`}
                      type="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <span className="text-sm text-red-600">
                      {formik.errors.password ? formik.errors.password : null}
                    </span>
                  </Label>

                  <Button type="submit" className="mt-5 py-[.5rem]" block>
                    Log in
                  </Button>

                  <hr className="my-8" />
                </form>
                <p className="mt-4">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    to="/forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </p>
                <p className="mt-1">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    to="/signup"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
