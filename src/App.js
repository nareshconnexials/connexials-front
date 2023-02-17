import React, { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import MainRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "./assets/css/global.css";
import { setRole } from "./helpers/Utils";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setRole("guest");
    }
  }, []);
  return (
    <>
      <ThemeProvider>
        <ToastContainer />
        <MainRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
