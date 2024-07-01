import React, { useContext } from "react";
import { UserContext } from "../context/User";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className=" p-3 flex justify-between items-center h-fit bg-white shadow-lg text-sky-500 sticky top-0">
      <NavLink to={"/"} className="h-full">
        <img src="/images/logo_title.png" className="object-contain h-12" />
      </NavLink>
      <div className="flex gap-6 items-center font-semibold">
        <NavLink to={"/contest"}>Contest</NavLink>
        <NavLink to={"/playground"}>PlayGround</NavLink>
        <NavLink to={"/problems"}>Problems</NavLink>
        <NavLink
          to={"/login"}
          className="bg-sky-400 bg-opacity-25 px-4 py-2 rounded-md font-semibold"
        >
          Register/Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
