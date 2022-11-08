import React, { useContext, useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
  InfoCard,
  RoundIcon,
  Card,
  Label,
  Input,
  Select,
} from "@windmill/react-ui";
import { EditIcon, PeopleIcon, TrashIcon } from "../icons";

import "../assets/css/Leave.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getLeaveData,
  leavesSelector,
} from "../redux/slices/Leaves/leavesSlice";
import SectionTitle from "../components/Typography/SectionTitle";
import { ThemeContext } from "../context/ThemeContext";

const Leave = () => {
  const [isModal, setIsModal] = useState(false);
  const [leaveFields, setLeaveFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    leave: "",
    startDate: "",
    endDate: "",
  });
  const dispatch = useDispatch();
  const { leaveData } = useSelector(leavesSelector);
  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setLeaveFields({ ...leaveFields, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(getLeaveData(leaveFields));
    setIsModal(false);
  };

  if (isModal === true) {
    return (
      <>
        <div className="flex items-center p-6 w-[60%]  my-[5rem] bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 h-full max-w-[40rem] mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
            <div className="flex flex-col items-center w-full overflow-y-auto">
              <main className="flex items-center h-full my-[7rem] w-full justify-center p-6 sm:p-12">
                <div className="w-full">
                  <div className="w-full">
                    <span
                      className={`text-xl flex justify-end cursor-pointer ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                      onClick={() => {
                        setIsModal(false);
                      }}
                    >
                      X
                    </span>
                    <h1 className="mb-4 text-4xl font-semibold text-gray-700 dark:text-gray-200">
                      Create Leave
                    </h1>
                    {/* <div className="md:flex w-full sm:flex-col md:flex-row min-w-full justify-between"> */}
                    <Label className="block text-sm text-gray-700 dark:text-gray-400 w-[28rem] label">
                      Leave
                      <Select
                        className="select-box "
                        onChange={handleChange}
                        name="leave"
                        value={leaveFields.leave}
                      >
                        <option>Select Leave:</option>
                        <option value="Vacation">Vacation</option>
                        <option value="Sick">Sick</option>
                        <option value="Casual">Casual</option>
                      </Select>
                    </Label>
                    {/* </div> */}
                    {/* <div className="md:flex w-full sm:flex-col md:flex-row min-w-full justify-between"> */}
                    <Label className="block text-sm text-gray-700 dark:text-gray-400 w-[28rem] label">
                      <span className="font-medium">Start Date</span>
                      <Input
                        type="date"
                        className={"mt-1"}
                        name="startDate"
                        onChange={handleChange}
                        value={leaveFields.startDate}
                      />
                    </Label>
                    <Label className="block text-sm text-gray-700 dark:text-gray-400 w-[28rem] label">
                      <span className="font-medium">End Date</span>
                      <Input
                        type="date"
                        className={"mt-1"}
                        name="endDate"
                        onChange={handleChange}
                        value={leaveFields.endDate}
                      />
                    </Label>

                    <div className="flex w-full justify-end">
                      <Button
                        type="submit"
                        className="mt-5 py-[.5rem] w-[50%] btn"
                        onClick={handleSubmit}
                      >
                        Create Leave
                      </Button>
                    </div>
                  </div>

                  <hr className="my-8" />
                </div>
              </main>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex w-full justify-between items-center">
        <PageTitle>Leave</PageTitle>

        <div
          onClick={() => {
            setIsModal(true);
          }}
        >
          <Button className="leave-btn">Add Leave</Button>
        </div>
      </div>

      <div className="flex">
        <div className="flex mb-8 justify-center w-full">
          <Card className="card">
            <div className="bg-blue-500 card-item">30</div>
            <SectionTitle>Total Leave</SectionTitle>
          </Card>
        </div>

        <div className="flex mb-8 justify-center w-full">
          <Card className="card">
            <div className="bg-green-500 card-item">3</div>
            <SectionTitle>Consumed</SectionTitle>
          </Card>
        </div>

        <div className="flex mb-8 justify-center w-full">
          <Card className="card">
            <div className="bg-red-500 card-item">27</div>
            <h2
              className={`text-sm font-bold ${
                theme === "dark" ? "text-white" : "text-gray-600"
              }`}
            >
              Balanced Leave
            </h2>
          </Card>
        </div>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Type of Leave</TableCell>
              <TableCell>Status</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {leaveData.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <span className="text-sm">{user.startDate}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.endDate}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.leave}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter> */}
      </TableContainer>
    </div>
  );
};

export default Leave;
