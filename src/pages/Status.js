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
  Button,
  Pagination,
} from "@windmill/react-ui";
// import { useDispatch, useSelector } from "react-redux";
import { getRole } from "../helpers/Utils";
import SectionTitle from "../components/Typography/SectionTitle";
import { useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { useSelector } from "react-redux";
import { statusSelector } from "../redux/slices/Status/statusSlice";

const Status = () => {
  const isRole = getRole();
  const [page, setPage] = useState(1);
  const { dailyStatus } = useSelector(statusSelector);
  const navigate = useNavigate();

  const handleChangePage = (p) => {
    setPage(p);
  };
  return (
    <>
      {isRole === "admin" && (
        <>
          <PageTitle>Status</PageTitle>
        </>
      )}

      {isRole === "employee" && (
        <>
          <div className="flex w-full justify-between items-center">
            <PageTitle>Status</PageTitle>
            <Button
              className="daily-status-btn"
              onClick={() => {
                navigate("/apply-status");
              }}
            >
              Apply Status
            </Button>
          </div>
          <TableContainer className="mt-8">
            <SectionTitle>All Status</SectionTitle>
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Status Date</TableCell>
                  <TableCell>In-Time</TableCell>
                  <TableCell>Out-Time</TableCell>
                  <TableCell>Total Hours</TableCell>
                  <TableCell>Actions</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {/* {[].map((user, i) => ( */}
                <TableRow
                // key={i}

                // onClick={() => {
                //   navigate(`/leaves/user/${user?.id && user?.id}`);
                // }}
                >
                  <TableCell>
                    <span className="text-sm">23/11/2022</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{dailyStatus.projectType}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm"></span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm"></span>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => {
                        navigate("/status/update/1");
                      }}
                      className="bg-teal-400 font-semibold flex text-white p-2 rounded-lg"
                    >
                      <BiShow className="text-white font-extrabold text-2xl" />
                      show
                    </button>
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
            <TableFooter>
              <Pagination
                totalResults={1}
                resultsPerPage={1}
                onChange={handleChangePage}
                label="Table navigation"
              />
            </TableFooter>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default Status;
