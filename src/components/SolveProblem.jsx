import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Split from "react-split";
import useGetProblem from "../hooks/useGetProblem";
import EditorCode from "./EditorCode";

const SolveProblem = () => {
  const { id } = useParams();
  const [data, loading, error] = useGetProblem(id);
  const { problem } = data || {};
  const splitReff = useRef(null);
  return (
    <Split
      ref={splitReff}
      className="flex h-full w-full overflow-hidden text-black"
      sizes={[50, 50]}
      minSize={0}
      gutterSize={5}
      gutterAlign="center"
      direction="horizontal"
      cursor="col-resize"
    >
      <div className="p-3 m-2 border rounded-xl overflow-x-hidden">
        {loading && <h1 className="text-center my-auto">Loading...</h1>}
        <h1 className="py-1 text-xl font-semibold">{problem?.title}</h1>
        <hr />
        <p className="">{problem?.description}</p>
      </div>
      <div className="h-full">
        <EditorCode examples={data?.problem?.examples} />
      </div>
    </Split>
  );
};

export default SolveProblem;
