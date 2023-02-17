import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/layout/Header";

import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSidebar,
  sidebarSelector,
} from "../redux/slices/Sidebar/sidebarSlice";

function Layout({ children }) {
  const { isSidebarOpen } = useSelector(sidebarSelector);
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [location, dispatch]);

  return (
    <div
      className={`flex h-screen  dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <div className="flex justify-center">
          <Main>{children}</Main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
