import React, { useEffect, useState } from "react";
import "../../assets/css/Leave.css";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Button,
  Pagination,
  Card,
} from "@windmill/react-ui";

import InfoCard from "../Cards/InfoCard";
import RoundIcon from "../RoundIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserLeaveData,
  leavesSelector,
} from "../../redux/slices/Leaves/leavesSlice";
import SectionTitle from "../Typography/SectionTitle";
import {
  getUserProfileData,
  usersSelector,
} from "../../redux/slices/Users/usersSlice";
import { getRole, getUserId } from "../../helpers/Utils";
import { ChartsIcon, HeartIcon, MoneyIcon } from "../../icons";
import LeaveModal from "./LeaveModal";
import { useNavigate } from "react-router-dom";

const allotedBalanceArr = [
  {
    month: "January",
    credit: "1.0",
    leave: "0",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "February",
    credit: "1.0",
    leave: "0",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "March",
    credit: "2.0",
    leave: "1.0",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "April",
    credit: "1.0",
    leave: "2.0",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "May",
    credit: "1.0",
    leave: "6.0",
    loss: "3.0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "June",
    credit: "2.0",
    leave: "0",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "July",
    credit: "1.0",
    leave: "1.0",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "August",
    credit: "1.0",
    leave: "1.0",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "September",
    credit: "2.0",
    leave: "1.5",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "October",
    credit: "1.0",
    leave: "0",
    loss: "1.0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "November",
    credit: "1.0",
    leave: "0",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
  {
    month: "December",
    credit: "2.0",
    leave: "0",
    loss: "0",
    penalty: "0",
    compoff: "0",
  },
];

const EmployeeLeave = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leave, setLeave] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { leaveData } = useSelector(leavesSelector);
  const { profile } = useSelector(usersSelector);
  const userId = getUserId();
  const isRole = getRole();

  const [page, setPage] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const resultsPerPage = 10;

  console.log("leaveData", leaveData);

  useEffect(() => {
    dispatch(getUserLeaveData());
    console.log("leaveData", leaveData);

    if (userId) {
      dispatch(getUserProfileData(userId));
    }
    console.log("profile", profile);
    // eslint-disable-next-line
  }, [dispatch, userId]);

  const handleChangePage = (p) => {
    setPage(p);
  };

  useEffect(() => {
    setDataTable(
      leaveData?.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );

    if (leaveData.length > 0) {
      let updatedData = leaveData.reduce((acc, item) => {
        return acc + Number(item.days);
      }, 0);
      console.log(updatedData);
      setLeave(updatedData);
    }
  }, [leaveData, page]);

  const handleBack = () => {
    setIsModalOpen(false);
  };

  // Apply Leave Modal
  if (isModalOpen === true) {
    return (
      <LeaveModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleBack={handleBack}
      />
    );
  }

  console.log(leave);

  if (isRole === "employee") {
    return (
      <>
        <div className="mt-4 flex">
          <div className="flex lg:flex-grow mb-8 justify-between">
            <InfoCard
              className="info-card-leave"
              title="Total Leave"
              value={"30"}
            >
              <RoundIcon
                icon={HeartIcon}
                iconColorClass="text-pink-500 dark:text-pink-100"
                bgColorClass="bg-pink-100 dark:bg-pink-500"
                className="mr-4"
              />
            </InfoCard>

            <InfoCard title="Consumed Leave" value={leave}>
              <RoundIcon
                icon={ChartsIcon}
                iconColorClass="text-purple-500 dark:text-purple-100"
                bgColorClass="bg-purple-100 dark:bg-purple-500"
                className="mr-4"
              />
            </InfoCard>

            <InfoCard title="Balance Leave" value={30 - leave}>
              <RoundIcon
                icon={MoneyIcon}
                iconColorClass="text-green-500 dark:text-green-100"
                bgColorClass="bg-green-100 dark:bg-green-500"
                className="mr-4"
              />
            </InfoCard>
            <div className="flex justify-end items-center h-24 leave-btn-div">
              <Button
                className="leave-btn"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Apply Leaves
              </Button>
            </div>
          </div>
        </div>

        <div className="flex mt-1">
          <Card className="card">
            <SectionTitle>Leave Balance</SectionTitle>
            <SectionTitle>5.5</SectionTitle>
          </Card>
        </div>

        <div className="flex md:justify-between ">
          <TableContainer className="mb-8 alloted-balance-container">
            <div className="flex justify-start px-2 pt-2">
              <SectionTitle>Alloted Balance</SectionTitle>
            </div>
            <Table className="whitespace-normal">
              <TableHeader className="flex">
                <tr>
                  <TableCell>Month</TableCell>
                  <TableCell>Credit</TableCell>
                  <TableCell>Leave</TableCell>
                  <TableCell>Penalty</TableCell>
                  <TableCell>Compoff</TableCell>
                </tr>
              </TableHeader>
              <TableBody className="table-body-alloted-balance">
                {allotedBalanceArr.map((balance, i) => (
                  <TableRow key={i} className="mt-4">
                    <TableCell className="table-cell-alloted-balance">
                      <span className="text-sm">{balance.month}</span>
                      <TableCell>
                        <span className="text-sm">{balance.credit}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{balance.leave}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{balance.penalty}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{balance.compoff}</span>
                      </TableCell>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            Consumed Leave
          </TableContainer>

          {/* All Leaves of USER  */}
          <TableContainer className="mb-8 applied-leave-container">
            <div className="flex justify-start px-2 pt-2 ">
              <SectionTitle>
                {profile.firstName &&
                  profile.lastName &&
                  `All Leaves of ${profile.firstName} ${profile.lastName}`}
              </SectionTitle>
            </div>
            <Table>
              <TableHeader>
                <tr>
                  <TableCell className="applied-leave-cell">
                    Applied By
                  </TableCell>
                  <TableCell className="applied-leave-cell">Leave</TableCell>
                  <TableCell className="applied-leave-cell">From</TableCell>
                  <TableCell className="applied-leave-cell">To</TableCell>
                  <TableCell className="applied-leave-cell">Reason</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {dataTable.map((user, i) => (
                  <TableRow
                    key={i}
                    className="cursor-pointer"
                    onClick={() => {
                      navigate(`/leaves/user/${user?.id && user?.id}`);
                    }}
                  >
                    <TableCell>
                      <span className="text-sm">
                        {profile.firstName} {profile.lastName}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.days} Days</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.fromDate}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.toDate}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm whitespace-pre-wrap">
                        {user.reason}
                      </span>
                      <Badge type={user.status}>{user.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableFooter>
              <Pagination
                totalResults={leaveData.length}
                resultsPerPage={resultsPerPage}
                onChange={handleChangePage}
                label="Table navigation"
              />
            </TableFooter>
          </TableContainer>
        </div>
      </>
    );
  } else {
  }
};

export default EmployeeLeave;
