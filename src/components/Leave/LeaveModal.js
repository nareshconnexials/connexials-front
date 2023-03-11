import React, { useState } from "react";
import { Button, Label, Input, Select, Textarea } from "@windmill/react-ui";
import { useFormik } from "formik";
import { createLeaveModalSchema } from "../../redux/validation/leaveModalValidation";
import { addLeaveData } from "../../redux/slices/Leaves/leavesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const LeaveModal = ({ handleBack, isModalOpen, setIsModalOpen }) => {
  const leaveFieldsObj = {
    fromDate: "",
    toDate: "",
    fromSession: "",
    toSession: "",
    days: "",
    mailTo: "",
    reason: "",
  };

  const dispatch = useDispatch();
  const [diffDateValue, setDiffDateValue] = useState("");

  const formik = useFormik({
    initialValues: leaveFieldsObj,
    validationSchema: createLeaveModalSchema,

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const { setFieldValue } = formik;

  useEffect(() => {
    let fromDate = new Date(formik.values.fromDate);
    let toDate = new Date(formik.values.toDate);
    let time = Math.abs(toDate - fromDate);
    let diffDays = Math.ceil(time / (1000 * 60 * 60 * 24));
    setDiffDateValue(diffDays);
  }, [formik.values.fromDate, formik.values.toDate]);

  useEffect(() => {
    if (diffDateValue) setFieldValue("days", diffDateValue);
  }, [diffDateValue, setFieldValue]);

  const handleSubmit = (value) => {
    dispatch(addLeaveData(value, setIsModalOpen(false)));
    console.log(value);
  };

  if (isModalOpen === true) {
    return (
      <>
        <div className="flex items-center p-6 w-[60%]  my-[5rem] bg-gray-50 dark:bg-gray-900">
          <div className="leave-container flex-1 h-full mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
            <div className="leave-modal flex flex-col items-center overflow-y-auto">
              <main className="flex items-center h-full my-[7rem] w-full justify-center p-6 sm:p-12">
                <div className="w-full">
                  <form
                    className="w-full"
                    method="POST"
                    onSubmit={formik.handleSubmit}
                  >
                    <h1 className="mb-4 text-4xl font-semibold text-gray-700 dark:text-gray-200">
                      Apply Leave
                    </h1>

                    <div className="md:flex w-full sm:flex-col md:flex-row min-w-full justify-between">
                      <Label className="block text-sm text-gray-700 dark:text-gray-400 w-full label">
                        <span className="font-medium">From date</span>
                        <Input
                          type="date"
                          className={`mt-1 py-[5px] ${
                            formik.errors.fromDate
                              ? "shadow-sm shadow-red-400 transition-shadow"
                              : ""
                          }`}
                          name="fromDate"
                          onChange={formik.handleChange}
                          value={formik.values.fromDate}
                        />
                        <span className="text-sm text-red-600">
                          {formik.errors.fromDate
                            ? formik.errors.fromDate
                            : null}
                        </span>
                      </Label>
                      <Label className="block text-sm text-gray-700 dark:text-gray-400 w-full label">
                        From session
                        <Select
                          className={`select-box mt-1 py-[5px] ${
                            formik.errors.fromSession
                              ? "shadow-sm shadow-red-400 transition-shadow"
                              : ""
                          }`}
                          onChange={formik.handleChange}
                          name="fromSession"
                          value={formik.values.fromSession}
                        >
                          <option value="" disabled selected hidden>
                            Select Session
                          </option>
                          <option value="Session1">Session1</option>
                        </Select>
                        <span className="text-sm text-red-600">
                          {formik.errors.fromSession
                            ? formik.errors.fromSession
                            : null}
                        </span>
                      </Label>
                    </div>
                    <div className="md:flex w-full sm:flex-col md:flex-row min-w-full justify-between">
                      <Label className="block text-sm text-gray-700 dark:text-gray-400 w-full label">
                        <span className="font-medium">To date</span>
                        <Input
                          type="date"
                          className={`mt-1 py-[5px] ${
                            formik.errors.toDate
                              ? "shadow-sm shadow-red-400 transition-shadow"
                              : ""
                          }`}
                          name="toDate"
                          onChange={formik.handleChange}
                          value={formik.values.toDate}
                        />
                        <span className="text-sm text-red-600">
                          {formik.errors.toDate ? formik.errors.toDate : null}
                        </span>
                      </Label>
                      <Label className="block text-sm text-gray-700 dark:text-gray-400 w-full label">
                        To session
                        <Select
                          className={`select-box mt-1 py-[5px] ${
                            formik.errors.toSession
                              ? "shadow-sm shadow-red-400 transition-shadow"
                              : ""
                          }`}
                          onChange={formik.handleChange}
                          name="toSession"
                          value={formik.values.toSession}
                        >
                          <option value="" disabled selected hidden>
                            Select Session
                          </option>
                          <option value="Session2">Session2</option>
                        </Select>
                        <span className="text-sm text-red-600">
                          {formik.errors.toSession
                            ? formik.errors.toSession
                            : null}
                        </span>
                      </Label>
                    </div>
                    <div className="md:flex w-full sm:flex-col md:flex-row min-w-full justify-between">
                      <Label className="block text-sm text-gray-700 dark:text-gray-400 w-full label">
                        <span className="font-medium">Days</span>
                        <Input
                          type="number"
                          className={`mt-1 py-[5px] ${
                            formik.errors.days
                              ? "shadow-sm shadow-red-400 transition-shadow"
                              : ""
                          }`}
                          name="days"
                          value={formik.values.days}
                          disabled={diffDateValue ? false : true}
                        />

                        <span className="text-sm text-red-600">
                          {formik.errors.days ? formik.errors.days : null}
                        </span>
                      </Label>
                      <Label className="block text-sm text-gray-700 dark:text-gray-400 w-full label" />
                    </div>
                    <div className="md:flex w-full sm:flex-col md:flex-row min-w-full justify-between">
                      <Label className="block text-sm text-gray-700 dark:text-gray-400 w-full label">
                        <span className="font-medium">Mail to</span>
                        <Input
                          type="text"
                          className={`mt-1 py-[5px] ${
                            formik.errors.mailTo
                              ? "shadow-sm shadow-red-400 transition-shadow"
                              : ""
                          }`}
                          name="mailTo"
                          onChange={formik.handleChange}
                          value={formik.values.mailTo}
                        />
                        <span className="text-sm text-red-600">
                          {formik.errors.mailTo ? formik.errors.mailTo : null}
                        </span>
                      </Label>
                    </div>
                    <div className="md:flex w-full sm:flex-col md:flex-row min-w-full justify-between">
                      <Label className="flex flex-col text-sm text-gray-700 dark:text-gray-400 w-full label">
                        <span className="font-medium">Reason</span>
                        <Textarea
                          name="reason"
                          cols="30"
                          rows="5"
                          value={formik.values.reason}
                          onChange={formik.handleChange}
                          className={`${
                            formik.errors.reason
                              ? "shadow-sm shadow-red-400 transition-shadow"
                              : ""
                          }`}
                        />
                        <span className="text-sm text-red-600">
                          {formik.errors.reason ? formik.errors.reason : null}
                        </span>
                      </Label>
                    </div>

                    <div className="flex w-full justify-start">
                      <Button
                        type="submit"
                        className="mt-5 py-[.5rem] w-[50%] apply-leave-btn"
                      >
                        Apply
                      </Button>
                      <Button
                        className="mt-5 py-[.5rem] w-[50%] leave-back-btn"
                        onClick={handleBack}
                      >
                        Back
                      </Button>
                    </div>
                  </form>

                  <hr className="my-8" />
                </div>
              </main>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default LeaveModal;
