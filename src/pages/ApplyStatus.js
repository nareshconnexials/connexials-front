import React from "react";
import ApplyStatusModal from "../components/Status/ApplyStatusModal";
import { getRole } from "../helpers/Utils";

const ApplyStatus = () => {
  const isRole = getRole();
  return (
    <>
      {isRole === "employee" && (
        <div>
          <ApplyStatusModal />
        </div>
      )}
    </>
  );
};

export default ApplyStatus;
