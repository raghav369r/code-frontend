import React from "react";
import useGetAllProblems from "../hooks/useGetAllProblems";
import { NavLink } from "react-router-dom";

const ProblemTable = () => {
  const [data, error, loading] = useGetAllProblems();

  return (
    <div className="container mx-auto text-lg ">
      <h1 className="text-center text-amber-700 text-2xl p-4 font-semibold">
        Practice Problems from previous Contests
      </h1>
      <table className="w-full">
        <tbody>
          <tr className="text-gray-500 text-center border-b">
            <td className="p-3">Title</td>
            <td className="p-3">Difficulty</td>
          </tr>
          {data?.problems?.map((ele, ind) => (
            <tr key={ind} className="text-black even:bg-neutral-100">
              <td className="p-3 line-clamp-1 hover:text-blue-600 cursor-pointer">
                <NavLink to={"/problem/" + ele.id}>
                  {ind + 1 + ". " + ele.title}
                </NavLink>
              </td>
              <Difficulty difficulty={ele.difficulty} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// const a="";
// a.to
const Difficulty = ({ difficulty }) => {
  if (difficulty.toLowerCase() == "hard")
    return <td className="p-3 text-amber-900">Hard</td>;
  if (difficulty.toLowerCase() == "medium")
    return <td className="p-3 text-yellow-500">Medium</td>;
  if (difficulty.toLowerCase() == "easy")
    return <td className="p-3 text-green-700">Easy</td>;
  return <td className="p-3 text-green-700">N/A</td>;
};

export default ProblemTable;
