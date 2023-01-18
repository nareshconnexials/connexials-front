import React from "react";
import { Input, Label, Button } from "@windmill/react-ui";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createAccountSchema } from "../redux/validation/accountValidation";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../redux/slices/Accounts/accountSlice";
import { getRole } from "../helpers/Utils";

function AddAccount() {
  const signUpDetails = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const isRole = getRole("role");

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
    navigate("/");
  };
  return (
    <>
      {isRole === "admin" && (
        <div className="create-account-container flex items-center p-6  my-[5rem] bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
            <div className="flex flex-col items-center w-full overflow-y-auto">
              <main className="flex items-center h-full my-[7rem] justify-center p-6 sm:p-12">
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
                        {formik.errors.firstName
                          ? formik.errors.firstName
                          : null}
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

                    <Button
                      type="submit"
                      block
                      className="mt-5 py-[.5rem] w-[50%]"
                    >
                      Create account
                    </Button>
                  </form>
                  <hr className="my-8" />
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddAccount;
