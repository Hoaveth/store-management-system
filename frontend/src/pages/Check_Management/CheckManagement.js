import React from "react";
import { useSelector } from "react-redux";

const CheckManagement = () => {
  const isAuthenticated = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  return (
    <div>
      <p>dsds</p>
    </div>
  );
};

export default CheckManagement;
