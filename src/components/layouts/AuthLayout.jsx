import React, { useContext, useEffect } from "react";
import Header from "../Header";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User";

const AuthLayout = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);
  if(!user) return null;
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
