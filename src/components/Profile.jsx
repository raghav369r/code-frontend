import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { UserContext } from "../context/User";
import { CiLocationOn } from "react-icons/ci";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { PiListChecksBold } from "react-icons/pi";
import { MdCloudDone } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [rc, setRc] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="bg-[#f7f8fa] w-full">
      <div className="container mx-auto py-10 gap-4 grid grid-cols-12 text-gray-500">
        <div className="p-4 bg-white shadow-md rounded-2xl flex flex-col gap-3 col-span-3">
          <div className="flex gap-3 items-center">
            <CgProfile className="size-32" />
            <h1 className="text-2xl font-semibold">{user.firstName}</h1>
            <h2>{user.userName}</h2>
          </div>
          <button
            className="text-green-500 bg-green-500 bg-opacity-25 py-2 px-4 rounded-lg"
            onClick={() => navigate("edit")}
          >
            Edit Profile
          </button>
          <div className="flex gap-4 items-center">
            <CiLocationOn className="size-6" />
            <h1>India</h1>
          </div>
          <div className="flex gap-4 items-center">
            <LiaLinkedin className="size-6" />
            <h1>{user.linkedinLink || "not Set"}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <BsGithub className="size-6" />
            <h1>{user.githubLink || "not Set"}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <FaLink className="size-6" />
            <h1>{user.portfolioLink || "not Set"}</h1>
          </div>
          <hr />
          <h1 className="text-black">Languages</h1>
          <div className="flex flex-col gap-2">
            <Language language="C++" solved="10" />
            <Language language="C" solved="36" />
            <Language language="Python" solved="98" />
            <Language language="Java" solved="1" />
            <Language language="JavaScript" solved="22" />
            <Language language="Ruby" solved="21" />
            <Language language="R" solved="112" />
          </div>
        </div>
        <div className="flex flex-col gap-4 col-span-9">
          <div className="p-4 bg-white rounded-2xl shadow-lg h-fit">
            <h1 className="text-balck">Participated contests</h1>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-lg h-fit">
            <div className="flex justify-between">
              <ul className="flex gap-4 cursor-pointer">
                <li
                  className={
                    " flex items-center gap-2 text-black py-2 px-4 rounded-md hover:bg-slate-100" +
                    (rc ? " bg-slate-200" : "")
                  }
                >
                  <span>
                    <PiListChecksBold className="size-full" />
                  </span>
                  Recent Acc
                </li>
                <li
                  className={
                    "flex items-center gap-2 text-black py-2 px-4 rounded-md hover:bg-slate-100" +
                    (rc ? "" : " bg-slate-200")
                  }
                >
                  <span>
                    <MdCloudDone className="size-full" />
                  </span>
                  Recent submitted
                </li>
              </ul>
              <NavLink className="flex gap-2 items-center">
                <h1 className="text-sm">View all submissions</h1>
                <FaAngleRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Language = ({ language, solved }) => {
  return (
    <div className="flex justify-between text-sm">
      <h1 className="px-2 py-1 min-w-12 text-center rounded-full bg-gray-200">
        {language}
      </h1>
      <h1>
        <span className="font-semibold">{solved}</span> problems solved
      </h1>
    </div>
  );
};

export default Profile;
