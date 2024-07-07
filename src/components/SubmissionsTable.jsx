import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GetAllSubmissions } from "../../graphQL/Quary";
import { UserContext } from "../context/User";
import { NavLink } from "react-router-dom";

const SubmissionsTable = () => {
  const { user } = useContext(UserContext);
  const { data, error, loading } = useQuery(GetAllSubmissions, {
    variables: { userId: user.id },
  });

  const { submissions } = data || {};
  return (
    <div className="container mx-auto">
      <table className="w-full p-2">
        <tr className="text-gray-600 font-semibold ">
          <td className="p-3 line-clamp-1 border-b">Title</td>
          <td className="">Done in contest</td>
          <td className="">Submitted At</td>
        </tr>
        {submissions?.map((ele, ind) => (
          <tr key={ind} className="text-black even:bg-neutral-100 border-b">
            <td className="p-3 line-clamp-1 hover:text-blue-600 cursor-pointer">
              <NavLink to={"/problem/" + ele.problemId}>
                {ele?.problem.title}
              </NavLink>
            </td>
            <td className="">{ele.isInContest ? "true" : "false"}</td>
            <td>{new Date(ele.submittedAt).toDateString()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SubmissionsTable;
