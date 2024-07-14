import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import CodesContest from "../../context/Codes";

const CodeLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col ">
      <Header />
      <Outlet />
    </div>
  );
};

export default CodeLayout;
