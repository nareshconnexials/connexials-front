import React from "react";
import ImageLight from "../assets/img/create-account-office.jpeg";
import ImageDark from "../assets/img/create-account-office-dark.jpeg";
import { Input, Label, Button } from "@windmill/react-ui";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createAccountSchema } from "../redux/validation/accountValidation";
import { useNavigate, Link } from "react-router-dom";
import { signUpUser } from "../redux/slices/Accounts/accountSlice";

function SignUp() {
  const signUpDetails = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: signUpDetails,
    validationSchema: createAccountSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    dispatch(signUpUser(values, closeSignUpPage));
  };

  const closeSignUpPage = () => {
    navigate("/login");
  };
  return (
    <div className="flex items-center min-h-screen p-6  my-[5rem] bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
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
                  Create account
                </h1>
                <Label>
                  <span className="font-medium">First Name</span>
                  <Input
                    className={`mt-1 py-[5px] ${
                      formik.errors.firstName
                        ? "shadow-sm shadow-red-400 transition-shadow"
                        : ""
                    }`}
                    type="text"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  <span className="text-sm text-red-600">
                    {formik.errors.firstName ? formik.errors.firstName : null}
                  </span>
                </Label>
                <Label>
                  <span className="font-medium">Last Name</span>
                  <Input
                    className={`mt-1 py-[5px] ${
                      formik.errors.lastName
                        ? "shadow-sm shadow-red-400 transition-shadow"
                        : ""
                    }`}
                    type="text"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  <span className="text-sm text-red-600">
                    {formik.errors.lastName ? formik.errors.lastName : null}
                  </span>
                </Label>
                <Label>
                  <span className="font-medium">Email</span>
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
                <Label>
                  <span className="font-medium">Password</span>
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

                <Label className="mt-6" check>
                  <Input type="checkbox" />
                  <span className="ml-2">
                    I agree to the{" "}
                    <span className="underline">privacy policy</span>
                  </span>
                </Label>

                <Button type="submit" block className="mt-5 py-[.5rem]">
                  Create account
                </Button>
              </form>
              <hr className="my-8" /> 

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
