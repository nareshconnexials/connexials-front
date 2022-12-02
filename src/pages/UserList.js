import React, { useEffect, useState } from "react";

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
  Pagination,
} from "@windmill/react-ui";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData, usersSelector } from "../redux/slices/Users/usersSlice";
import { getRole } from "../helpers/Utils";

function UserList() {
  const { usersData } = useSelector(usersSelector);
  const [page, setPage] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const resultsPerPage = 5;
  const isRole = getRole("role");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  const handleChangePage = (p) => {
    setPage(p);
  };
  useEffect(() => {
    setDataTable(
      usersData.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );
  }, [page, usersData]);

  return (
    <>
      {isRole === "admin" && (
        <>
          <div className="user-list">
            <PageTitle>Users Data</PageTitle>

            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dataTable.map((data, i) => (
                    <TableRow key={data.id}>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <span className="font-semibold ml-2">
                            {data.first_name}
                          </span>
                          <span className="font-semibold ml-2">
                            {data.last_name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{data.email}</span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          type={`${
                            data.role === "admin" ? "primary" : "success"
                          }`}
                        >
                          {data.role === "admin" ? "admin" : "employee"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TableFooter>
                <Pagination
                  totalResults={usersData.length}
                  resultsPerPage={resultsPerPage}
                  onChange={handleChangePage}
                  label="Table navigation"
                />
              </TableFooter>
            </TableContainer>
          </div>
        </>
      )}
    </>
  );
}

export default UserList;
