import React, { useState } from "react";
import { Label, Input, Select, Textarea } from "@windmill/react-ui";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import SectionTitle from "../Typography/SectionTitle";
import { FaCircle, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addDailyStatus } from "../../redux/slices/Status/statusSlice";
import { createStatusModalSchema } from "../../redux/validation/statusModalValidation";

const ApplyStatusModal = () => {
  const statusFields = {
    toEmail: "",
    statusDate: "",
    billingHours: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [countTask, setCountTask] = useState(0);
  const [addMoreTaskField, setAddMoreTaskField] = useState([
    <TaskFields countKey={countTask} />,
  ]);

  const formik = useFormik({
    initialValues: statusFields,
    validationSchema: createStatusModalSchema,
    // validateOnMount: false,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });
  const handleAddMoreTask = () => {
    setCountTask(countTask + 1);
    setAddMoreTaskField([
      ...addMoreTaskField,
      <TaskFields countKey={countTask} />,
    ]);
  };

  const handleDeleteTaskFields = (count) => {
    const updatedData = addMoreTaskField.filter((e, index) => index !== count);
    setAddMoreTaskField([...addMoreTaskField, updatedData]);
  };

  function TaskFields(props) {
    return (
      <div key={props.countKey} className="border my-2">
        <div className="flex w-full  bg-gray-50 dark:bg-gray-800 p-5 justify-between">
          <Label className="block text-sm text-gray-700 dark:text-gray-400 label w-56">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Project
            </span>
            <Select
              className={`select-box mt-1 py-[5px] cursor-pointer `}
              name="projectType"
              onChange={formik.handleChange}
              defaultValue={formik.values.projectType}
            >
              <option value="" disabled selected hidden>
                Select Project
              </option>
              <option value="UPilot">UPilot</option>
            </Select>
            <span className="text-sm text-red-600">
              {" "}
              {formik.errors.projectType ? formik.errors.projectType : null}
            </span>
          </Label>

          <Label className="block text-sm text-gray-700 dark:text-gray-400 label w-56">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Working Hours
            </span>
            <Input
              className={`select-box mt-1 py-[5px] ${
                formik.errors.workingHours
                  ? "shadow-sm shadow-red-400 transition-shadow"
                  : ""
              } `}
              type="text"
              name="workingHours"
              onChange={formik.handleChange}
              // value={formik.values.workingHours}
            />
            <span className="text-sm text-red-600">
              {" "}
              {formik.errors.workingHours ? formik.errors.workingHours : null}
            </span>
          </Label>

          <Label className="block text-sm text-gray-700 dark:text-gray-400 label w-56">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Status
            </span>
            <Select
              className={`select-box mt-1 py-[5px] cursor-pointer `}
              name="statusType"
              onChange={formik.handleChange}
              defaultValue={formik.values.statusType}
            >
              <option value="" disabled selected hidden>
                Select Status
              </option>
              <option value="status">Status</option>
            </Select>
            <span className="text-sm text-red-600">
              {" "}
              {formik.errors.statusType ? formik.errors.statusType : null}
            </span>
          </Label>
        </div>
        <div className="flex w-full bg-gray-50 dark:bg-gray-800 p-5">
          <div className="flex w-full">
            <Label className="flex flex-col text-sm text-gray-700 dark:text-gray-400 w-full label">
              <span className="font-medium my-2">Task</span>
              <Textarea
                name="task"
                cols="40"
                rows="5"
                onChange={formik.handleChange}
                value={formik.values.task}
                className={`${
                  formik.errors.task
                    ? "shadow-sm shadow-red-400 transition-shadow"
                    : ""
                }`}
              />
              <span className="text-sm text-red-600">
                {" "}
                {formik.errors.reason ? formik.errors.reason : null}
                {formik.errors.task ? formik.errors.task : null}
              </span>
            </Label>
          </div>
          <div onClick={() => handleDeleteTaskFields(countTask)}>
            <span className="w-12 flex justify-end mt-10">
              <FaTrashAlt className="text-red-600 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (value) => {
    dispatch(
      addDailyStatus(value, () => {
        navigate("/status");
      })
    );
  };

  return (
    <>
      <div className="apply-status-container flex items-center p-6 my-[5rem] bg-gray-50 dark:bg-gray-900">
        <div className="apply-status flex-1 h-full mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
          <div className="flex flex-col items-center overflow-y-auto">
            <h1 className="apply-title flex items-center mb-1 mt-1 pl-2 w-full h-12 text-3xl font-semibold text-gray-600 dark:text-gray-300">
              Send Daily Status Update
            </h1>
            Please Find My Status Update:
            <div className="flex mt-2 px-2 w-full justify-between">
              <SectionTitle>Do want change your availability?</SectionTitle>
              <div className="w-32 flex">
                <span className="w-full flex justify-evenly items-center font-semibold">
                  <h3 className="text-gray-600 dark:text-gray-300">Busy</h3>
                  <span className="flex items-start">
                    <FaCircle className="text-red-600" />
                  </span>
                </span>
              </div>
            </div>
            <main className="flex items-start h-full my-[7rem] w-full justify-center p-6 sm:p-8">
              <div className="w-full">
                <form className="w-full" onSubmit={formik.handleSubmit}>
                  <div className="md:flex w-full sm:flex-col md:flex-row min-w-full justify-between items-center">
                    <Label className="block text-sm text-gray-700 dark:text-gray-400">
                      <span className="font-medium">To</span>
                      <Input
                        type="email"
                        className={`mt-1 py-[5px] ${
                          formik.errors.firstName
                            ? "shadow-sm shadow-red-400 transition-shadow"
                            : ""
                        } `}
                        name="toEmail"
                        onChange={formik.handleChange}
                        value={formik.values.toEmail}
                      />
                      <span className="text-sm text-red-600">
                        {" "}
                        {formik.errors.toEmail ? formik.errors.toEmail : null}
                      </span>
                    </Label>
                    <Label className="text-sm text-gray-700 dark:text-gray-400 h-12">
                      <span className="font-medium">CC</span>
                      <div className="mt-4">
                        <h4 className="text-gray-600 dark:text-gray-300">
                          status@connexials.com
                        </h4>
                      </div>
                    </Label>
                    <Label className="block text-sm text-gray-700 dark:text-gray-400 w-56">
                      <span className="font-medium">Status date</span>
                      <Input
                        type="date"
                        className={`mt-1 statusDate-[5px] ${
                          formik.errors.firstName
                            ? "shadow-sm shadow-red-400 transition-shadow"
                            : ""
                        } `}
                        name="statusDate"
                        onChange={formik.handleChange}
                        value={formik.values.statusDate}
                      />
                      <span className="text-sm text-red-600">
                        {" "}
                        {formik.errors.statusDate
                          ? formik.errors.statusDate
                          : null}
                      </span>
                    </Label>
                  </div>

                  <div className="md:flex w-full my-5 sm:flex-col md:flex-col min-w-full justify-between">
                    <span className="font-medium cursor-pointer text-gray-600 dark:text-gray-300">
                      + ADD YOUR PROJECT BILLING
                    </span>
                    <div className="bg-gray-50 dark:bg-gray-800 p-5 border">
                      <Label className="block text-sm text-gray-700 dark:text-gray-400 label w-56">
                        <span className="font-medium text-gray-600 dark:text-gray-300">
                          Billing Hours for Xxxx
                        </span>
                        <Input
                          type="text"
                          className={`mt-1 py-[5px] ${
                            formik.errors.billingHours
                              ? "shadow-sm shadow-red-400 transition-shadow"
                              : ""
                          } `}
                          name="billingHours"
                          onChange={formik.handleChange}
                          value={formik.values.billingHours}
                        />
                        <span className="text-sm text-red-600">
                          {" "}
                          {formik.errors.billingHours
                            ? formik.errors.billingHours
                            : null}
                        </span>
                      </Label>
                    </div>
                  </div>
                  <div className="md:flex  w-full my-5 sm:flex-col md:flex-col min-w-full justify-between">
                    {/* <span className="font-medium cursor-pointer text-gray-600 dark:text-gray-300">
                      + ADD YOUR TASK DETAILS
                    </span> */}
                    {addMoreTaskField &&
                      addMoreTaskField?.map((fields, i) => {
                        return (
                          <>
                            <div key={i}>{fields}</div>
                          </>
                        );
                      })}
                  </div>
                  <div>
                    <span
                      onClick={handleAddMoreTask}
                      className="bg-blue-500 dark:bg-blue-800 p-2 rounded-lg text-white font-medium cursor-pointer"
                    >
                      + ADD MORE TASK
                    </span>
                  </div>

                  <div className="flex w-full justify-between mt-10">
                    <button
                      onClick={() => {
                        navigate("/status");
                      }}
                      className="mt-5 py-2 px-8 w-[12rem] mx-2 bg-yellow-400 font-semibold text-white rounded-lg"
                    >
                      BACK
                    </button>
                    <button
                      className="mt-5 py-[.5rem] px-5 w-[50%] mx-2 font-semibold bg-green-500 text-white rounded-lg"
                      type="submit"
                    >
                      SEND
                    </button>
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
};

export default ApplyStatusModal;
