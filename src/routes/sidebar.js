/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
// import { useParams } from "react-router-dom";

// const { id } = useParams();

const routes = [
  {
    path: "/dashboard",
    icon: "HomeIcon",
    name: "Dashboard",
    role: ["admin", "employee"],
  }, 
  {
    path: "/user-list",
    icon: "PeopleIcon",
    name: "UserList",
    role: ["admin"],
  },
  {
    path: "/status",
    icon: "BellIcon",
    name: "Status",
    role: ["admin", "employee"],
  },
  {
    path: "/payslip",
    icon: "PagesIcon",
    name: "Payslip",
    role: ["admin", "employee"],
  },
  {
    path: "/leave",
    icon: "HeartIcon",
    name: "Leave",
    role: ["admin", "employee"],
  },
];

export default routes;
