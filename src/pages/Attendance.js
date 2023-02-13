import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  Pagination,
} from "@windmill/react-ui";
import { getRole } from "../helpers/Utils";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import {
  attendanceSelector,
  addEmployeeAttendanceData,
} from "../redux/slices/Attendance/attendanceSlice";
import { getUserId } from "../helpers/Utils";

const Attendance = () => {
  const isRole = getRole();
  const dispatch = useDispatch();

  const [digitalTime, setDigitalTime] = useState("");
  const [dataTable, setDataTable] = useState([]);
  const [checkInOutAttendance, setCheckInOutAttendance] = useState({
    checkIn: "",
    checkOut: "",
  });
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [checkInDisabled, setCheckInDisabled] = useState(false);
  const [checkOutDisabled, setCheckOutDisabled] = useState(true);
  const [page, setPage] = useState(1);
  const resultsPerPage = 8;

  const { attendanceData } = useSelector(attendanceSelector);

  useEffect(() => {
    let timer = setInterval(async () => {
      let mainTime = await moment().format("LTS");
      setDigitalTime(mainTime);
      setCurrentDate(moment(new Date()).format("DD/MM/YYYY"));

      setCurrentDay(moment(new Date()).format("dddd"));
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const earlierDateTime = `${currentDate} ${checkInOutAttendance?.checkIn}`;
    const laterDateTime = `${currentDate} ${checkInOutAttendance?.checkOut}`;
    const difference = moment(laterDateTime, "DD/MM/YYYY h:mm:ss").diff(
      moment(earlierDateTime, "DD/MM/YYYY h:mm:ss")
    );
    const diffHours = moment.utc(difference).format("H");
    if (diffHours !== "Invalid date") {
      if (moment(earlierDateTime).isBefore(laterDateTime)) {
        setWorkingHours(diffHours);
      }
    }

    const second = moment.duration(difference);

    if (
      second?._isValid &&
      moment().format("ss") &&
      checkInDisabled === false &&
      checkOutDisabled === true
    ) {
      setCheckInDisabled(true);
      setCheckOutDisabled(false);
    } else {
      setCheckInDisabled(false);
      setCheckOutDisabled(true);
    }
  }, [checkInOutAttendance.checkIn, checkInOutAttendance.checkOut]);

  const handleInOutAttendance = (checkInOut) => {
    if (checkInOut === "checkIn") {
      setCheckInOutAttendance({
        ...checkInOutAttendance,
        checkIn: digitalTime,
      });

      dispatch(
        addEmployeeAttendanceData({
          checkIn: digitalTime,
          day: currentDay,
          date: currentDate,
          workingHours: workingHours,
        })
      );
    } else {
      setCheckInOutAttendance({
        ...checkInOutAttendance,
        checkOut: digitalTime,
      });
      dispatch(
        addEmployeeAttendanceData({
          checkOut: digitalTime,
          day: currentDay,
          date: currentDate,
          workingHours: workingHours,
        })
      );
    }
  };

  useEffect(() => {
    setDataTable(
      attendanceData.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );
  }, [page, attendanceData]);

  const handleChangePage = (p) => {
    setPage(p);
  };

  return (
    <>
      {isRole === "employee" && (
        <>
          <div className="flex w-full justify-center">
            <Card className="flex items-center justify-center my-20 mx-10 w-full h-48 bg-white dark:bg-gray-300">
              <CardBody>
                <hr className="mb-2 text-gray-600 dark:text-gray-300" />

                <h2 className="mb-4 text-4xl tracking-wider font-bold text-gray-600 dark:text-gray-300">
                  {digitalTime}
                </h2>
                <hr className="text-gray-600 dark:text-gray-300" />
              </CardBody>
            </Card>
            <Card className="flex items-center justify-center my-20 mx-10 w-3/6 h-48 bg-white dark:bg-gray-300">
              <CardBody>
                <hr className="my-3 text-gray-600 dark:text-gray-300" />
                <div className="flex w-full justify-center items-baseline">
                  <button
                    onClick={() => handleInOutAttendance("checkIn")}
                    className="my-4 mx-2 text-lg px-6 rounded-md tracking-wide text-center font-semibold text-gray-600
                dark:text-white bg-green-300 dark:bg-green-500 hover:bg-green-400 transition"
                    disabled={checkInDisabled}
                  >
                    IN
                  </button>
                  <button
                    onClick={() => handleInOutAttendance("checkOut")}
                    className="my-4 mx-2 text-lg px-6 rounded-md tracking-wide text-center font-semibold text-gray-600
                dark:text-white bg-orange-300 dark:bg-orange-500 hover:bg-orange-400 transition"
                    disabled={checkOutDisabled}
                  >
                    OUT
                  </button>
                </div>
                <hr className="my-3 text-gray-600 dark:text-gray-300" />
              </CardBody>
            </Card>
          </div>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Day</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Check In</TableCell>
                <TableCell>Check Out</TableCell>
                <TableCell>Working Hours</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {attendanceData.length === 0 ? (
                <TableRow>
                  <TableCell>
                    <span className="text-sm text-center">No Data Found</span>
                  </TableCell>
                </TableRow>
              ) : (
                getUserId() &&
                dataTable &&
                dataTable?.map((value, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <span className="text-sm">{value?.day}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{value?.date}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {value?.checkIn === undefined ? "-" : value?.checkIn}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {value?.checkOut === undefined
                            ? "-"
                            : value?.checkOut}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {value?.checkOut && workingHours}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={attendanceData.length}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </>
      )}
    </>
  );
};

export default Attendance;
