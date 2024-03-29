import React, { useContext, useEffect, useState } from "react";
import mylogo from "./logo.png";

import {
   //eslint-disable-next-line
   MoonIcon,
   //eslint-disable-next-line
   SunIcon,
   BellIcon,
   MenuIcon,
   OutlinePersonIcon,
   OutlineCogIcon,
   OutlineLogoutIcon,
   User,
   ButtonsIcon,
} from "../icons";

import { Avatar, Badge, Dropdown, DropdownItem, WindmillContext } from "@windmill/react-ui";

import { getRole, getUserId } from "../helpers/Utils";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/slices/Accounts/accountSlice";
import { getUsersData } from "../redux/slices/Users/usersSlice";
import { sidebarSelector, toggleSidebar } from "../redux/slices/Sidebar/sidebarSlice";
import "./style.css";

function Header() {
   //eslint-disable-next-line
   const { mode, toggleMode } = useContext(WindmillContext);
   const { isSidebarOpen } = useSelector(sidebarSelector);

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const location = useLocation();

   const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
   const [isLoggedIn, setLoggedIn] = useState(false);
   const [isCheckLoggedIn, setCheckLoggedIn] = useState(false);

   useEffect(() => {
      dispatch(getUsersData());
   }, [dispatch]);

   function handleNotificationsClick() {
      setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
   }

   function handleProfileClick() {
      setIsProfileMenuOpen(!isProfileMenuOpen);
   }

   const handleLogoutAccount = () => {
      dispatch(logOutUser(closeDashboardPage));
   };

   const closeDashboardPage = () => {
      navigate("/login");
   };

   const handleToggleSidebar = () => {
      if (isSidebarOpen === false) {
         dispatch(toggleSidebar(true));
      } else {
         dispatch(toggleSidebar(false));
      }
   };
   const handleSettingClick = () => {
      navigate("/settings");
   };

   const role = getRole();

   const handlelogin = () => {
      if (isLoggedIn === false) {
         setLoggedIn(true);
         navigate("/login");
      } else {
         setLoggedIn(false);
      }
   };

   useEffect(() => {
      if (isLoggedIn && location.pathname === "/login") {
         setCheckLoggedIn(true);
      } else {
         setCheckLoggedIn(false);
      }
   }, [isLoggedIn, location.pathname]);

   return (
      <header className="flex z-40 py-4 bg-white shadow-bottom dark:bg-gray-800 ">
         <div className="flex align-center px-10 flex-shrink-0 text-purple-600">
            <button className=" mr-5 -ml-1 rounded-md lg:hidden" onClick={handleToggleSidebar} aria-label="Menu">
               <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <Link to={role === "guest" ? "/home" : "/"} className="inline-block text-3xl text-purple-500">
               {/* logo */}
            <img src={require("./logo.png")} alt="Logo"  height="50px" width="200px"/>
            </Link>

         </div>
         <div className="container flex items-center justify-end lg:justify-end h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            {/* <!-- Mobile hamburger --> */}
            {/* <!-- Search input --> */}
            {/* <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div> */}
            <ul className="flex items-center flex-shrink-0 space-x-6">
               {/* <!-- Theme toggler --> */}
               {/* <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li> */}
               {/* <!-- Notifications menu --> */}
               {role === "admin" || role === "employee" ? (
                  <>
                     <li className="relative">
                        <button
                           className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                           onClick={handleNotificationsClick}
                           aria-label="Notifications"
                           aria-haspopup="true"
                        >
                           <BellIcon className="w-5 h-5" aria-hidden="true" />
                           {/* <!-- Notification badge --> */}
                           <span
                              aria-hidden="true"
                              className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                           ></span>
                        </button>

                        <Dropdown align="right" isOpen={isNotificationsMenuOpen} onClose={() => setIsNotificationsMenuOpen(false)}>
                           <DropdownItem tag="a" href="#" className="justify-between">
                              <span>Messages</span>
                              <Badge type="danger">13</Badge>
                           </DropdownItem>
                           <DropdownItem tag="a" href="#" className="justify-between">
                              <span>Sales</span>
                              <Badge type="danger">2</Badge>
                           </DropdownItem>
                           <DropdownItem onClick={() => alert("Alerts!")}>
                              <span>Alerts</span>
                           </DropdownItem>
                        </Dropdown>
                     </li>
                     <li className="relative">
                        <button
                           className="rounded-full focus:shadow-outline-purple"
                           onClick={handleProfileClick}
                           aria-label="Account"
                           aria-haspopup="true"
                        >
                           <Avatar
                              className="align-middle"
                              src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                              alt=""
                              aria-hidden="true"
                           />
                        </button>
                        <Dropdown align="right" isOpen={isProfileMenuOpen} onClose={() => setIsProfileMenuOpen(false)}>
                           <DropdownItem
                              onClick={() => {
                                 navigate(`/profile/${getUserId()}`);
                                 setIsProfileMenuOpen(false);
                              }}
                           >
                              <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                              <span>Profile</span>
                           </DropdownItem>
                           <DropdownItem onClick={handleSettingClick}>
                              <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                              <span>Settings</span>
                           </DropdownItem>
                           <DropdownItem onClick={handleLogoutAccount}>
                              <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                              <span>Log out</span>
                           </DropdownItem>
                        </Dropdown>
                     </li>
                  </>
               ) : (
                  // <li>
                  //    <button
                  //       class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded "
                  //       onClick={() => {
                  //          navigate("/login");
                  //       }}
                  //    >
                  //       login+
                  //    </button>
                  //    <button>
                  //       <User className="w-8 h-8" aria-hidden="true" />
                  //    </button>
                  // </li>

                  <li class="flex">
                     {location.pathname !== "/login" && (
                        <button
                           className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ${
                              isCheckLoggedIn ? "hidden" : "block"
                           } `}
                           onClick={handlelogin}
                        >
                           Login
                        </button>
                     )}

                     {/* {isLoggedIn && (
          <button style={{ marginLeft: "auto" }}>
            <User className="w-8 h-8" aria-hidden="true" />
          </button>
        )} */}
                  </li>
               )}
            </ul>
         </div>
      </header>
   );
}

export default Header;
