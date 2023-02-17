import React from "react";
import { useLocation } from "react-router-dom";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

function Sidebar() {
  const location = useLocation();
  console.log(location.pathname);
  const hideLoc = ["/login", "/signup", "/forgot-password"];
  return (
    <>
      {!hideLoc.includes(location.pathname) ? (
        <>
          <DesktopSidebar />
          <MobileSidebar />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Sidebar;
