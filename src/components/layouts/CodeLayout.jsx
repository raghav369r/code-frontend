import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import useFullScreen from "../../hooks/useFullScreen";
import usePreventTabSwitch from "../../hooks/usePreventTabSwitch";

const CodeLayout = () => {
  // const [warning, setWarning] = useState(10);
  // const _ = useFullScreen();
  // const __ = usePreventTabSwitch(null, warning, setWarning);
  return (
    <div className="w-full h-screen flex flex-col ">
      <Header />
      <Outlet />
    </div>
  );
};

export default CodeLayout;
