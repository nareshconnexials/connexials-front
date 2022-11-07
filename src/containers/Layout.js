import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "./Main";
import { SidebarContext } from "../context/SidebarContext";

function Layout({ children, role}) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

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
