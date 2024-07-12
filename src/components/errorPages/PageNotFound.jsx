import React from "react";
import { NEWTON_LINK } from "../../config/constants";
import Header from "../Header";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className=" min-h-[100vh] h-fit">
      <Header />
      <img src={NEWTON_LINK} className="md:absolute right-0 top-10 p-4" />
      <div className="text-black p-4  md:w-[500px] md:ml-10 md:mt-32 items-center">
        <h1 className="font-bold text-4xl">Whoops, we got a problem :/</h1>
        <p className="py-4 text-lg">
          There are coconuts here instead of what you were looking for. Let’s
          take a step back.
        </p>
        <div className="relative">
          <Link
            to={"/home"}
            className="absolute top-0 z-20 text-xl cursor-pointer px-5 py-3 rounded-lg border m-4 border-gray-400 "
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
