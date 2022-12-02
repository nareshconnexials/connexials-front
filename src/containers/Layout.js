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

function Layout({ children }) {
  const { isSidebarOpen } = useSelector(sidebarSelector);
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [location, dispatch]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
}

export default Layout;
