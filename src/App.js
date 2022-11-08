import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import MainRoutes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
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
