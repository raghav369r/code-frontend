import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import useGetPsubmissions from "../hooks/useGetPsubmissions";

const Description = ({ data, loading }) => {
  const { problem } = data || {};
  const [menu, setMenu] = useState(0);
  const { submissions, setSubmissions } = useGetPsubmissions(problem?.id);

  return (
    <div className="p-3 m-2 pr-0 border rounded-xl overflow-x-hidden h-full mr-0 flex flex-col">
      {loading && <h1 className="text-center my-auto">Loading...</h1>}
      <ul className="cursor-pointer items-center flex gap-3 font-semibold text-lg border-b">
        <li
          onClick={() => setMenu(0)}
          className={menu == 0 ? "p-2 border-black border-b" : ""}
        >
          Problems
        </li>
        <li
          onClick={() => setMenu(1)}
          className={menu == 1 ? "p-2 border-black border-b" : ""}
        >
          Submitions
        </li>
      </ul>
      {menu == 1 &&
        (submissions.length ? (
          <table className="w-full">
            <tr className="text-gray-500 text-center border-b">
              <td className="p-3">Accepted</td>
              <td className="p-3">filed TestCase</td>
              <td className="p-3">submittedAt</td>
              <td className="p-3">Solved In</td>
            </tr>
            {submissions?.map((ele, ind) => (
              <tr key={ind} className="text-black even:bg-neutral-100">
                <td className="p-3 line-clamp-1 hover:text-blue-600 cursor-pointer">
                  {ele.isAccepted ? "true" : "false"}
                </td>
                <td p-3>{ele.inputCase == "-1" ? "None" : ele.inputCase}</td>
                <td className="p-3 line-clamp-1">
                  {new Date(ele?.submittedAt).toLocaleString()}
                </td>
                <td className="p-3">{ele?.language}</td>
              </tr>
            ))}
          </table>
        ) : (
          <h1>not submitted any code yet</h1>
        ))}
      {menu == 0 && (
        <div className="h-full overflow-y-scroll">
          <h1 className="py-2 text-xl font-semibold h-fit">{problem?.title}</h1>
          <p className="py-4">{problem?.description}</p>
          {problem?.examples?.map((ex, ind) => (
            <>
              <h1 className="py-2 font-semibold">Example {ind + 1}</h1>
              <Example example={ex} key={ind} />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

const Example = ({ example }) => {
  const { input, output, explanation } = example || {};
  return (
    <div className="bg-neutral-100 p-3 m-2 rounded">
      <h1 className="font-semibold">input</h1>
      <h2 className="p-1">{input}</h2>
      <h1 className="font-semibold">output</h1>
      <h2 className="p-1">{output}</h2>
      {explanation && <h1 className="font-semibold">explanation</h1>}
      <h2 className="p-1">{explanation}</h2>
    </div>
  );
};

export default Description;
