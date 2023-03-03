import React from "react";
import routes from "../../routes/sidebar";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import * as Icons from "../../icons";
import { Button } from "@windmill/react-ui";
import ThemedSuspense from "../ThemedSuspense";
import { getRole } from "../../helpers/Utils";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent(props) {
  const isRole = getRole("role");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(isRole);

  return (
    <div
      className={`py-4 text-gray-500 dark:text-gray-400 ${
        props.active === true ? "w-full" : ""
      }`}
    >
      <ul className="mt-3">
        {routes
          .filter((i) => i.role.includes(isRole))
          .map((route) => (
            <li
              className={`relative px-6 py-3 ${
                location.pathname === route.path
                  ? "bg-purple-600 rounded-sm"
                  : ""
              }`}
              key={route.name}
            >
              <NavLink
                to={route.path}
                className="inline-flex items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 active:text-gray-800"
              >
                <Routes>
                  <Route loader={<ThemedSuspense />} path={route.path} />
                </Routes>
                <Icon
                  className={`w-5 h-5 focus:outline-none ${
                    location.pathname === route.path
                      ? "text-white font-bold"
                      : ""
                  }`}
                  aria-hidden="true"
                  icon={route.icon}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={route.name}
                  data-tooltip-place="right"
                />
                {props.active ? (
                  <span
                    className={`ml-4 ${
                      location.pathname === route.path
                        ? "text-white font-bold"
                        : ""
                    }`}
                  >
                    {route.name}
                  </span>
                ) : null}
              </NavLink>
            </li>
          ))}
      </ul>
      {isRole === "admin" && (
        <div
          className="px-6 my-6"
          onClick={() => {
            navigate("/add-account");
          }}
        >
          <Button
            className="bg-purple-500"
            style={{ display: props.active ? "inline-block" : "none" }}
          >
            Add account
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </Button>
        </div>
      )}
      {props.active === false && <Tooltip id="my-tooltip" />}
    </div>
  );
}

export default SidebarContent;
