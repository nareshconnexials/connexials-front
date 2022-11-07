import {
  Avatar,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageTitle from "../components/Typography/PageTitle";
import { getUserProfileData, usersSelector } from "../redux/slices/Users/usersSlice";

const Profile = () => {
  const { id } = useParams();
  const {profile} = useSelector(usersSelector)
  const dispatch =useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getUserProfileData(id));
    }
  }, [id, dispatch]);
  return (
    <>
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
                    <p className="font-semibold"><span>{profile.firstName}</span> <span>{profile.lastName}</span></p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">{profile.email}</span>
              </TableCell>
              <TableCell>
                <Badge type={"primary"}>{profile.role}</Badge>
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
    </>
  );
};

export default Profile;
