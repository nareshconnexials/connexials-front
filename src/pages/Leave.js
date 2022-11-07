import React, { useState } from "react";
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
import { getLeaveData, leavesSelector } from "../redux/slices/Leaves/leavesSlice";

const Leave = () => {
  const [isModal, setIsModal] = useState(false);
  const [leaveFields, setLeaveFields] = useState({
    firstName:"",
    lastName:"",
    email:"",
    leave:"",
    startDate:"",
    endDate:""
  });
  const dispatch = useDispatch();
  const {leaveData} = useSelector(leavesSelector); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setLeaveFields({...leaveFields, [name]:value})
  };
  const handleSubmit = ()=>{
    dispatch(getLeaveData(leaveFields))
    setIsModal(false)
  }

  if (isModal === true) {
    return (
      <>
        <div className="flex items-center p-6  my-[5rem] bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
            <div className="flex flex-col items-center w-full overflow-y-auto">
              <main className="flex items-center h-full my-[7rem] w-full justify-center p-6 sm:p-12">
                <div className="w-full">
                  <div className="w-full">
                    <span
                      className="text-xl flex justify-end cursor-pointer "
                      onClick={() => {
                        setIsModal(false);
                      }}
                    >
                      X
                    </span>
                    <h1 className="mb-4 text-4xl font-semibold text-gray-700 dark:text-gray-200">
                      Create Leave
                    </h1>
                    <div className="flex w-full min-w-full justify-around">
                      <Label>
                        <span className="font-medium">First Name</span>
                        <Input
                          className={`mt-1 py-[5px]  `}
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          value={leaveFields.firstName}
                        />
                      </Label>
                      <Label>
                        <span className="font-medium">Last Name</span>
                        <Input
                          className={`mt-1 py-[5px] `}
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          value={leaveFields.lastName}
                        />
                      </Label>
                    </div>
                    <div className="flex w-full justify-around">
                      <Label>
                        <span className="font-medium">Email</span>
                        <Input
                          className={`mt-1 py-[5px] `}
                          type="email"
                          name="email"
                          onChange={handleChange}
                          value={leaveFields.email}
                        />
                      </Label>
                      <Select
                        className="select-box"
                        onChange={handleChange}
                        name="leave"
                        value={leaveFields.leave}
                      >
                        <option>Select Leave:</option>
                        <option value="Vacation">Vacation</option>
                        <option value="Sick">Sick</option>
                        <option value="Casual">Casual</option>
                      </Select>
                    </div>
                    <div className="flex w-full justify-around">
                      <Label>
                        <span className="font-medium">Start Date</span>
                        <Input
                          type="date"
                          className={`mt-1`}
                          name="startDate"
                          onChange={handleChange}
                          value={leaveFields.startDate}
                        />
                      </Label>
                      <Label>
                        <span className="font-medium">End Date</span>
                        <Input
                          type="date"
                          className={`mt-1`}
                          name="endDate"
                          onChange={handleChange}
                          value={leaveFields.endDate}
                        />
                      </Label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    block
                    className="mt-5 py-[.5rem] w-[50%]"
                    onClick={handleSubmit}
                  >
                    Create Leave
                  </Button>

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
      <div
        className="flex w-full justify-around items-center"
        onBlur={() => {
          setIsModal(false);
        }}
      >
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
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 justify-center w-full">
          <Card className="card">
            <div className="bg-blue-500 card-item">30</div>
            <span>Total Leave</span>
          </Card>
        </div>

        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 justify-center w-full">
          <Card className="card">
            <div className="bg-green-500 card-item">3</div>
            <span>Consumed</span>
          </Card>
        </div>

        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 justify-center w-full">
          <Card className="card">
            <div className="bg-red-500 card-item">27</div>
            <span>Balanced Leave</span>
          </Card>
        </div>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Email</TableCell>
              <TableCell>From Date</TableCell>
              <TableCell>To Date</TableCell>
              <TableCell>Type of Leave</TableCell>
              <TableCell>Status</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {leaveData.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {/* <Avatar
                      className="hidden mr-3 md:block"
                      src={"user"}
                      alt="User avatar"
                    /> */}
                    <div>
                      <p className="font-semibold">{user.email}</p>
                      
                    </div>
                  </div>
                </TableCell>
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
