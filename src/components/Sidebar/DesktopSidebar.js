import React, { useState } from "react";

import SidebarContent from "./SidebarContent";
import "./sidebar.css";

function DesktopSidebar(props) {
  const [active, setActive] = useState(false);
  return (
    <aside className="z-30 flex-shrink-0 hidden w-[14rem] overflow-y-auto bg-white dark:bg-gray-800 lg:block ">
      <div
        className={`flex flex-col items-center justify-center sidebar${
          active ? " active" : " inactive"
        }`}
      >
        <SidebarContent active={active} />
        <button
          className="text-white text-2xl rounded-md w-10  h-10 bg-blue-500"
          onClick={() => {
            setActive(!active);
          }}
        >
          +
        </button>
      </div>
    </aside>
  );
}

export default DesktopSidebar;
