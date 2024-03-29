import React, { useState, useEffect } from "react";

import InfoCard from "../components/Cards/InfoCard";
//eslint-disable-next-line
import ChartCard from "../components/Chart/ChartCard";
//eslint-disable-next-line
import { Doughnut, Line } from "react-chartjs-2";
//eslint-disable-next-line
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
//eslint-disable-next-line
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon, BellIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
// import response from '../utils/demo/tableData'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  //eslint-disable-next-line
  TableFooter,
  Avatar,
  Badge,
  //eslint-disable-next-line
  Pagination,
} from "@windmill/react-ui";
//eslint-disable-next-line
import Profile from "../pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersData,
  getUserProfileData,
  usersSelector,
} from "../redux/slices/Users/usersSlice";
import { getRole, getUserId } from "../helpers/Utils";

function Dashboard() {
  const [page, setPage] = useState(1);
  const { profile, usersData } = useSelector(usersSelector);
  const dispatch = useDispatch();
  const userId = getUserId();
  const isRole = getRole("role");

  useEffect(() => {
    dispatch(getUsersData());
    if (userId) {
      dispatch(getUserProfileData(userId));
    }
  }, [dispatch, userId]);

  // pagination setup
  // const totalResults = response.length

  // pagination change control
  //eslint-disable-next-line
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page]);

  return (
    <>
      {isRole === "admin" && (
        <>
          <div className="admin-dashboard">
            <PageTitle>Dashboard</PageTitle>

            {/* <!-- Cards --> */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <InfoCard title="Total Users" value={usersData.length}>
                <RoundIcon
                  icon={PeopleIcon}
                  iconColorClass="text-orange-500 dark:text-orange-100"
                  bgColorClass="bg-orange-100 dark:bg-orange-500"
                  className="mr-4"
                />
              </InfoCard>

              <InfoCard title="Status" value="success">
                <RoundIcon
                  icon={BellIcon}
                  iconColorClass="text-green-500 dark:text-green-100"
                  bgColorClass="bg-green-100 dark:bg-green-500"
                  className="mr-4"
                />
              </InfoCard>

              <InfoCard title="Leave" value="3">
                <RoundIcon
                  icon={CartIcon}
                  iconColorClass="text-purple-500 dark:text-purple-100"
                  bgColorClass="bg-purple-100 dark:bg-purple-500"
                  className="mr-4"
                />
              </InfoCard>

              <InfoCard title="Turn Over" value="35">
                <RoundIcon
                  icon={ChatIcon}
                  iconColorClass="text-teal-500 dark:text-teal-100"
                  bgColorClass="bg-teal-100 dark:bg-teal-500"
                  className="mr-4"
                />
              </InfoCard>
            </div>

            {/* <TableContainer>
        <Table>
        <TableHeader>
        <tr>
        <TableCell>Client</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Date</TableCell>
        </tr>
        </TableHeader>
        <TableBody>
        {data.map((user, i) => (
          <TableRow key={i}>
          <TableCell>
          <div className="flex items-center text-sm">
          <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" />
          <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
          </div>
          </div>
          </TableCell>
          <TableCell>
          <span className="text-sm">$ {user.amount}</span>
          </TableCell>
          <TableCell>
          <Badge type={user.status}>{user.status}</Badge>
          </TableCell>
          <TableCell>
          <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
          </TableCell>
          </TableRow>
          ))}
                </TableBody>
                </Table>
                <TableFooter>
                <Pagination
                // totalResults={}
                resultsPerPage={resultsPerPage}
                label="Table navigation"
                onChange={onPageChange}
                />
                </TableFooter>
              </TableContainer> */}

            {/* <PageTitle>Charts</PageTitle> */}

            {/* <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
        <Doughnut {...doughnutOptions} />
        <ChartLegend legends={doughnutLegends} />
        </ChartCard>
        
        <ChartCard title="Traffic">
        <Line {...lineOptions} />
        <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div> */}
          </div>
        </>
      )}
      {isRole === "employee" && (
        <>
          <div className="employee-dashboard">
            <PageTitle>Profile</PageTitle>
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Avatar
                          className="hidden mr-3 md:block"
                          src={""}
                          alt=""
                        />
                        <div>
                          <p className="font-semibold">
                            <span>{profile?.firstName}</span>{" "}
                            <span>{profile?.lastName}</span>
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{profile?.email}</span>
                    </TableCell>
                    <TableCell>
                      <Badge type={"success"}>{profile?.role}</Badge>
                    </TableCell>

                    {/* <TableCell>
                <span className="text-sm">
                  {new Date("user.date").toLocaleDateString()}
                </span>
              </TableCell> */}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
