/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
    role: ["admin"],
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
    icon: "BellIcon",
    name: "Payslip",
    role: ["admin", "employee"],
  },
  {
    path: "/leave",
    icon: "BellIcon",
    name: "Leave",
    role: ["admin", "employee"],
  },
];

export default routes;
