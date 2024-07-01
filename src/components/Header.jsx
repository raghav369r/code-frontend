import React, { useContext } from "react";
import { UserContext } from "../context/User";
import { NavLink } from "react-router-dom";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoMdExit } from "react-icons/io";

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
        {user ? (
          <div className="group relative">
            <NavLink to={"/Profile"}>
              <HiMiniUserCircle color="#7B68EE" className="size-10" />
            </NavLink>
            <Menu user={user} setUser={setUser} />
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className="bg-sky-400 bg-opacity-25 px-4 py-2 rounded-md font-semibold"
          >
            Register/Login
          </NavLink>
        )}
      </div>
    </div>
  );
};
const Menu = ({ user, setUser }) => {
  return (
    <div className="hidden absolute z-10 p-4 w-44 h-fit border-gray-200 border group-hover:flex right-0 top-full bg-white cursor-pointer flex-col gap-2 font-normal text-neutral-600 rounded-lg shadow-md">
      <NavLink
        to={"/profile"}
        className="flex justify-between items-center p-1 hover:bg-neutral-200"
      >
        <HiMiniUserCircle className="size-20" />
        <h1>{user.name}</h1>
      </NavLink>
      <NavLink className="p-1 hover:bg-neutral-200">All Submitions</NavLink>
      <div
        className="flex gap-4 items-center p-1 hover:bg-neutral-200"
        onClick={() => setUser("")}
      >
        <IoMdExit className="size-7" />
        <h1>Logout</h1>
      </div>
    </div>
  );
};

export default Header;
