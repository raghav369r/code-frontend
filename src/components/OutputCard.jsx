import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const OutputCard = ({ data, error, loading, examples }) => {
  console.log("data: ", examples);
  const [menu, setMenu] = useState(2);
  const [caseNumber, setCaseNumber] = useState(0);
  return (
    <div className="flex flex-col bg-white h-full">
      <ul className="flex gap-4 border-b">
        <li
          onClick={() => setMenu(0)}
          className={
            "font-semibold  cursor-pointer px-2 py-2 border-black" +
            (menu == 0 ? " border-b" : "")
          }
        >
          TestCases
        </li>
        <li
          onClick={() => setMenu(1)}
          className={
            "font-semibold  cursor-pointer px-2 py-2 border-black" +
            (menu == 1 ? " border-b" : "")
          }
        >
          TestResult
        </li>
        <li
          onClick={() => setMenu(2)}
          className={
            "font-semibold  cursor-pointer px-2 py-2 border-black" +
            (menu == 2 ? " border-b" : "")
          }
        >
          OutPut
        </li>
        {loading && <li className="ml-auto p-2">loading...</li>}
      </ul>
      <div className="p-2 overflow-y-scroll h-fit">
        {menu == 2 && data?.output?.stdout && (
          <h1 className="bg-opacity-30 rounded-xl bg-green-600 p-2 text-green-800">
            {data?.output?.stdout.split("\n").map((ele, ind) => (
              <h1 key={ind}>{ele}</h1>
            ))}
          </h1>
        )}
        {menu == 2 && data?.output?.stderr && (
          <h1 className="bg-opacity-30 rounded-xl bg-red-600 p-2 text-red-800">
            {data?.output?.stderr.split("\n").map((ele, ind) => (
              <h1 key={ind}>{ele}</h1>
            ))}
          </h1>
        )}
        {menu <= 1 && examples?.length && (
          <div className="h-full flex flex-col">
            <ul className="flex gap-3 items-center">
              {examples.map((ele, ind) => (
                <li
                  onClick={() => setCaseNumber(ind)}
                  key={ind}
                  className={
                    "px-3 py-1.5 cursor-pointer  rounded hover:bg-neutral-100 font-semibold text-sm" +
                    (caseNumber == ind ? " bg-neutral-200" : "")
                  }
                >
                  {"Case " + (ind + 1)}
                </li>
              ))}
              <MdAdd className="cursor-not-allowed  rounded hover:bg-neutral-100 text-lg p-2 size-8" />
            </ul>
            <div className="">
              <h1 className="font-semibold p-2">Input</h1>
              <h2 className="px-2 py-1.5 border rounded border-blue-500 bg-neutral-100">
                {examples[caseNumber].input || "N/A"}
              </h2>
              <h1 className="font-semibold p-2">Expected Output</h1>
              <h2 className="px-2 py-1.5 border rounded border-blue-500 bg-neutral-100">
                {examples[caseNumber].output}
              </h2>
              {menu == 1 && (
                <>
                  <h1 className="font-semibold p-2">Your Output</h1>
                  <h2
                    onClick={() => setMenu(2)}
                    className="cursor-pointer px-2 py-1.5 border rounded border-blue-500 bg-neutral-100"
                  >
                    output for all test cases to is availabale at Output
                  </h2>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputCard;
