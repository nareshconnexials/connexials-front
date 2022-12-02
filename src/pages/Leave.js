import React, { useState } from "react";
import "../assets/css/Leave.css";
import { getRole } from "../helpers/Utils";
import LeaveModal from "../components/Leave/LeaveModal";
import EmployeeLeave from "../components/Leave/EmployeeLeave";
import AdminLeave from "../components/Leave/AdminLeave";

const Leave = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isRole = getRole();

  const handleBack = () => {
    setIsModalOpen(false);
  };

  // Apply Leave Modal
  if (isModalOpen === true) {
    return (
      <LeaveModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleBack={handleBack}
      />
    );
  }

  return <>{isRole === "employee" ? <EmployeeLeave /> : <AdminLeave/>}</>;
};

export default Leave;
