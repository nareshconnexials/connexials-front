import React from "react";
import { useLocation } from "react-router-dom";

const Resume = () => {
  const location = useLocation();
  const param = location.state.parameter;
  return <div>{param && <p>{JSON.stringify(param)}</p>}</div>;
};

export default Resume;
