import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSidebar,
  sidebarSelector,
} from "../redux/slices/Sidebar/sidebarSlice";
import MobileSidebar from "../components/Sidebar/MobileSidebar";

function Layout({ children }) {
  const { isSidebarOpen } = useSelector(sidebarSelector);
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [location, dispatch]);

  return (
    <div className={`flex h-screen  ${isSidebarOpen && "overflow-hidden"}`}>
      <div className="flex flex-col flex-1 w-full">
        <MobileSidebar />
        <Header />
        <div className="flex bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <Main>{children}</Main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
