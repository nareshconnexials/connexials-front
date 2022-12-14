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

export const routes = [
  {
    path: "/",
    component: Dashboard,
    protected: true,
    role: ["admin"],
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
    role: ["employee"],
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    protected: false,
    role: ["employee"],
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
    path: "/payslip",
    component: Payslip,
    protected: true,
    role: ["admin", "employee"],
  },
  {
    path: "/add-account",
    component: AddAccount,
    protected: true,
    role: { admin: "admin" },
  },
  {
    path: "/leave",
    component: Leave,
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
];

const isRole = getRole("role");

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
  return (
    <Router>
      <Suspense fallback={<ThemedSuspense />}>
        <Routes>
          {routes.map((route) => (
            <Route path="/" key={isRole}>
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
            </Route>
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}
