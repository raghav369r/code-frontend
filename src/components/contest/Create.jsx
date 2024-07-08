import React, { useState } from "react";
import Contest from "./Contest";
import Question from "./Question";
import { AddContest } from "../../../graphQL/Mutations";
import { useMutation } from "@apollo/client";

const Create = () => {
  const [addContest, { data: cdata, error, loading }] = useMutation(AddContest);
  const [data, setData] = useState({
    name: "",
    url: "",
    organisation: "",
    startTime: "",
    endTime: "",
    mediators: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const ndata = { ...data };
    ndata[name] = value;
    if (name == "startTime" || name == "endTime")
      console.log(new Date(value).toISOString());

    setData(ndata);
  };
  const [inputs, setInputs] = useState([
    {
      title: "",
      description: "",
      difficulty: "",
      startCode: "",
      solutionCode: "",
      expectedComplexity: "",
      constraints: "",
      topics: "",
      examples: [{ input: "", output: "", explanation: "" }],
    },
  ]);
  const handleCreate = async () => {
    const newContest = { contestQuestions: inputs, ...data };
    const res = await addContest({ variables: { newContest } });
  };
  return (
    <div className="">
      <Contest handleChange={handleChange} data={data} />
      <Question inputs={inputs} setInputs={setInputs} />
      <div className="text-center font-semibold">
        {error && (
          <h1 className="text-red-700 ">
            Error creating contest change url and fill all fields
          </h1>
        )}
        {data.addContest && (
          <h1 className="text-green-600">contest Created Successfully</h1>
        )}
      </div>
      <div className="flex justify-center ">
        <button
          onClick={handleCreate}
          className="btn bg-green-300 mb-5 text-gray-600 px-4 font-semibold"
        >
          {loading ? "loading..." : "Create Contest"}
        </button>
      </div>
    </div>
  );
};

export default Create;
