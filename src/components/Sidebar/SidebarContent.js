import React from "react";
import routes from "../../routes/sidebar";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import * as Icons from "../../icons";
import { Button } from "@windmill/react-ui";
import ThemedSuspense from "../ThemedSuspense";

import { getRole } from "../../helpers/Utils";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  const isRole = getRole("role");

  const navigate = useNavigate();

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        to="/"
      >
        Connexials
      </Link>
      <ul className="mt-6">
        {routes.map(
          (route) =>
            route.role.includes(isRole) && (
              <li className="relative px-6 py-3" key={route.name}>
                <NavLink
                  to={route.path}
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 active:text-gray-800"
                >
                  <Routes>
                    <Route loader={<ThemedSuspense />} path={route.path} />
                  </Routes>
                  <Icon
                    className="w-5 h-5"
                    aria-hidden="true"
                    icon={route.icon}
                  />
                  <span className="ml-4">{route.name}</span>
                </NavLink>
              </li>
            )
        )}
      </ul>
      {isRole === "admin" && (
        <div
          className="px-6 my-6"
          onClick={() => {
            navigate("/add-account");
          }}
        >
          <Button>
            Add account
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </Button>
        </div>
      )}
    </div>
  );
}

export default SidebarContent;
