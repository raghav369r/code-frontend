import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/User";
import useFullScreen from "../../hooks/useFullScreen";
import usePreventTabSwitch from "../../hooks/usePreventTabSwitch";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";
import { useQuery } from "@apollo/client";
import { GetContestDetails } from "../../../graphQL/Quary";

const ContestLayout = () => {
  const { contestURL } = useParams();
  const { user } = useContext(UserContext);
  if (!user) return null;
  const { data } = useQuery(GetContestDetails, {
    variables: { contestUrl: contestURL },
  });
  const [warning, setWarning] = useState(2);

  const contestRef = useRef(null);
  const { toggleFullscreen, isFullscreen } = useFullScreen(contestRef);
  const __ = usePreventTabSwitch(data?.contest?.id, warning, setWarning);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);
  console.log("full sceen: ", isFullscreen);
  return (
    <div
      ref={contestRef}
      className="relative h-[100vh] flex flex-col bg-white container mx-auto"
    >
      <div className="sticky text-black top-0 z-10 left-0 flex justify-between w-full px-10 bg-slate-200 py-2">
        <Link
          to={`/contest/participate/${contestURL}`}
          className="flex gap-3 items-center cursor-pointer hover:scale-110"
        >
          <IoArrowBackSharp />
          <h1>Go to all questions</h1>
        </Link>
        <div
          onClick={toggleFullscreen}
          className="cursor-pointer hover:scale-110"
        >
          {isFullscreen ? (
            <AiOutlineFullscreenExit className=" size-5" />
          ) : (
            <BsArrowsFullscreen className=" size-5" />
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ContestLayout;
