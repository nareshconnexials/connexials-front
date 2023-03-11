const routes = [
  {
    path: "/",
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
  {
    path: "/home",
    icon: "PeopleIcon",
    name: "Home",
    role: ["guest"],
  },
  {
    path: "/teams",
    icon: "PeopleIcon",
    name: "Teams",
    role: ["guest"],
  },
  {
    path: "/about",
    icon: "PeopleIcon",
    name: "About",
    role: ["guest"],
  },
  {
    path: "/cv",
    icon: "PeopleIcon",
    name: "Resume",
    role: ["admin"],
  },
];

export default routes;
