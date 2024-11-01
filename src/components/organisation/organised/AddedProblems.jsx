import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { mangeProblem } from "../../../../graphQL/Quary";
import MDEditor from "@uiw/react-md-editor";
import { Example } from "../../Description";
import {  BiDownArrow, BiUpArrow } from "react-icons/bi";

const AddedProblems = () => {
  const { data, error, loading } = useQuery(mangeProblem);
  return (
    <div className="min-h-[90vh]">
      <h1 className="text-black text-3xl text-center font-semibold mt-5">
        Problems Added By you
      </h1>
      <div className="text-black w-full container mx-auto p-2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data.problems.map((ele) => (
              <Display problem={ele} key={ele.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AddedProblems;
const Display = ({ problem }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="border-b"> 
      <div className="flex justify-between items-center cursor-pointer">
        <h1
          className="py-2 text-xl font-semibold w-full"
          onClick={() => setShow(!show)}
        >
          {problem?.title}
        </h1>
        {show ? <BiUpArrow className="" /> : <BiDownArrow />}
      </div>
      {show && problem?.description && (
        <div
          className="h-full overflow-y-scroll px-2 w-full"
          data-color-mode="light"
        >
          <MDEditor.Markdown source={problem?.description} />
          {problem?.examples?.map((ex, ind) => (
            <div key={ind}>
              <h1 className="py-2 font-semibold">Example {ind + 1}</h1>
              <Example example={ex} key={ind} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
