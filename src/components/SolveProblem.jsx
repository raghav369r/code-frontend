import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Split from "react-split";
import useGetProblem from "../hooks/useGetProblem";
import EditorCode from "./EditorCode";
import Description from "./Description";

const SolveProblem = () => {
  const { problemId } = useParams();
  const [data, loading, error] = useGetProblem(problemId);
  const splitReff = useRef(null);
  return (
    <Split
      ref={splitReff}
      className="flex h-full w-full overflow-hidden text-black"
      sizes={[40, 60]}
      minSize={0}
      gutterSize={8}
      gutterAlign="center"
      direction="horizontal"
      cursor="col-resize"
    >
      <Description data={data} loading={loading} />

      <div className="h-full">
        <EditorCode examples={data?.problem?.examples} />
      </div>
    </Split>
  );
};

export default SolveProblem;
