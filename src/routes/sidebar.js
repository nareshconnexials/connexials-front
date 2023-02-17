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
    path: "/leaves",
    icon: "HeartIcon",
    name: "Leave",
    role: ["admin", "employee"],
  },
  {
    path: "/attendance",
    icon: "PeopleIcon",
    name: "Attendance",
    role: ["employee"],
  },
];

export default routes;
