import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getUserLeaveDataById,
  leavesSelector,
} from "../redux/slices/Leaves/leavesSlice";
import { getUserId } from "../helpers/Utils";
import {
  getUserProfileData,
  usersSelector,
} from "../redux/slices/Users/usersSlice";
import { Badge } from "@windmill/react-ui";
import { BiArrowBack } from "react-icons/bi";
import { FcLeave } from "react-icons/fc";
import SectionTitle from "../components/Typography/SectionTitle";

const UserLeave = () => {
  const { id } = useParams();

  const { userLeaveData } = useSelector(leavesSelector);
  const { profile } = useSelector(usersSelector);
  const userId = getUserId();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (id !== undefined && userId) {
      dispatch(getUserLeaveDataById(id));

      dispatch(getUserProfileData(userId));
    }
  }, [id, dispatch, userId]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <BiArrowBack
          className="text-4xl cursor-pointer my-5"
          onClick={() => {
            navigate("/leaves");
          }}
        />
        <div className="container px-5 pb-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <SectionTitle>
                {" "}
                {profile.firstName} {profile.lastName}
              </SectionTitle>
              <p className="leading-relaxed text-base">
                <Badge type={profile.role === "admin" ? "primary" : "success"}>
                  {profile.role}
                </Badge>
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <SectionTitle>Mail To</SectionTitle>
              <p className="leading-relaxed text-base">
                {userLeaveData.mailTo}
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0">
              <FcLeave className="text-5xl" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <SectionTitle>Reason</SectionTitle>
              <p className="leading-relaxed text-base">
                {userLeaveData.reason}
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <SectionTitle>Days</SectionTitle>
              <p className="leading-relaxed text-base">{userLeaveData.days}</p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserLeave;
