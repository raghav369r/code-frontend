import React, { useContext, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import { UserContext } from "../../context/User";
import useFullScreen from "../../hooks/useFullScreen";
import usePreventTabSwitch from "../../hooks/usePreventTabSwitch";

const ContestLayout = () => {
  const { user } = useContext(UserContext);
  const contestRef = useRef(null);
  const _ = useFullScreen(contestRef);
  usePreventTabSwitch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);
  if (!user) return null;
  return (
    <div ref={contestRef} className="h-[100vh] flex flex-col bg-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default ContestLayout;
