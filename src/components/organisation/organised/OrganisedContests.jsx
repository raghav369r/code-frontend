import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetOrganised } from "../../../../graphQL/Quary";
const OrganisedContests = () => {
  const { data,loading } = useQuery(GetOrganised);
  if(loading) return <h1 className="h-[90vh] flex items-center justify-center text-2xl text-black">Loading...</h1>;
  if (!data?.contests?.length) return <h1 className="h-[90vh] flex items-center justify-center text-2xl text-black">Not organised any contests Yet!!</h1>;
  return (
    <div className="container mx-auto text-black min-h-[90vh]">
      <table className="w-full">
        <tr className="w-full hover:bg-neutral-100 border-b">
          <td className="text-gray-700 p-3">Name</td>
          <td className="text-gray-700 p-3">Start Time</td>
          <td className="text-gray-700 p-3">End Time</td>
          <td className="text-gray-700 p-3">url</td>
        </tr>
        {data?.contests?.map((ele, ind) => (
          <tr className=" odd:bg-slate-100 w-full hover:bg-neutral-100 border-b" key={ind}>
            <td className="p-3">{ele?.name}</td>
            <td className="p-3">{new Date(ele?.startTime).toLocaleString()}</td>
            <td className="p-3">{new Date(ele?.endTime).toLocaleString()}</td>
            <td className="p-3 cursor-pointer hover:text-blue-600">
              <Link to={`/contest/view/${ele.url}`}>{ele?.url}</Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default OrganisedContests;
