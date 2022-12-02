import React, { lazy, Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ThemedSuspense from "../components/ThemedSuspense";
import { getRole, getToken } from "../helpers/Utils";

const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const AddAccount = lazy(() => import("../pages/AddAccount"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const UserList = lazy(() => import("../pages/UserList"));
const Layout = lazy(() => import("../containers/Layout"));
const Status = lazy(() => import("../pages/Status"));
const Payslip = lazy(() => import("../pages/Payslip"));
const Leave = lazy(() => import("../pages/Leave"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
const Page404 = lazy(() => import("../pages/404"));
const UserLeave = lazy(() => import("../pages/UserLeave"));
const ApplyStatus = lazy(() => import("../pages/ApplyStatus"));
const StatusUpdate = lazy(() => import("../pages/StatusUpdate"));
const Attendance = lazy(() => import("../pages/Attendance"));

export const routes = [
  {
    path: "/",
    component: Dashboard,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/login",
    component: Login,
    protected: false,
    role: ["admin", "employee"],
  },
  {
    path: "/signup",
    component: SignUp,
    protected: false,
    role: ["admin", "employee"],
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    protected: false,
    role: ["admin", "employee"],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    protected: true,
    role: ["admin"],
  },
  {
    path: "/user-list",
    component: UserList,
    protected: true,
    role: ["admin"],
  },
  {
    path: "/status",
    component: Status,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/apply-status",
    component: ApplyStatus,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/status/update/:id",
    component: StatusUpdate,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/payslip",
    component: Payslip,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/add-account",
    component: AddAccount,
    protected: true,
    role: ["admin"],
  },
  {
    path: "/leaves",
    component: Leave,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/leaves/user/:id",
    component: UserLeave,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/attendance",
    component: Attendance,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/profile/:id",
    component: Profile,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/settings",
    component: Settings,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    name: "Not Found",
    path: "*",
    component: Page404,
    protected: true,
    role: ["admin", "employee"],
  },
];

function PrivateRoute({ children, route }) {
  const isAuthenticated = getToken("token");
  return isAuthenticated ? (
    <Layout route={route}>{children}</Layout>
  ) : (
    <Navigate to="/login" />
  );
}

function PublicRoutes({ children, route: { path } }) {
  const isAuthenticated = getToken("token");
  return isAuthenticated ? <Navigate to="/" replace /> : children;
}

export default function MainRoutes() {
  const role = "admin";
  return (
    <Router>
      <Suspense fallback={<ThemedSuspense />}>
        <Routes>
          {routes
            .filter((route) => route.role.includes(role))
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.protected ? (
                    <PrivateRoute route={route}>
                      <route.component />
                    </PrivateRoute>
                  ) : (
                    <PublicRoutes route={route}>
                      <route.component />
                    </PublicRoutes>
                  )
                }
              />
            ))}
        </Routes>
      </Suspense>
    </Router>
  );
}
