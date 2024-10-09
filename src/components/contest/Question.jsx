import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { findProblem } from "../../../graphQL/Quary";
import MDEditor from "@uiw/react-md-editor";
import { Example } from "../Description";

const Question = ({ setContestProblem, problem, ind }) => {
  const [find, { loading, data, error }] = useLazyQuery(findProblem);
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(true);
  const handleChange = async (e) => {
    setShow(true);
    const { value } = e.target;
    setTitle(value);
    await find({ variables: { title: value } });
  };
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3">
        <p className="col-span-3">Select Problem to add: </p>
        <div className="col-span-9">
          <input
            type="text"
            className="p-2 rounded bg-white border w-full  "
            onChange={handleChange}
          />
          <div className="divide-y border">
            {show && loading && (
              <span className="flex justify-center p-2 border">Loading...</span>
            )}
            {show &&
              !loading &&
              !error &&
              data?.matches?.map((ele) => (
                <div
                  key={ele.id}
                  className="p-2 hover:bg-neutral-200 cursor-pointer"
                  onClick={() => {
                    setShow(false);
                    setContestProblem(ele, ind);
                  }}
                >
                  {ele.title}
                </div>
              ))}
            {show && !loading && !data?.matches.length && (
              <span className="p-2 border flex justify-center">
                No matches found!!
              </span>
            )}
          </div>
        </div>
      </div>
      <h2 className="text-center my-4">Preview</h2>
      {problem?.description && (
        <div className="h-full overflow-y-scroll px-2" data-color-mode="light">
          <h1 className="py-2 text-xl font-semibold h-fit">{problem?.title}</h1>
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

export default Question;
