import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { GrAdd } from "react-icons/gr";
import Question from "./Question";
import { useMutation } from "@apollo/client";
import { AddContest } from "../../../graphQL/Mutations";
const Create = () => {
  const [menu, setMenu] = useState(-1);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    url: "",
    startTime: "",
    endTime: "",
    contestQuestions: [{}],
  });
  const [addContest, { loading }] = useMutation(AddContest);
  const handleMenu = (ind) => {
    setMenu(ind);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const ndata = { ...data };
    ndata[name] = value;
    setData(ndata);
  };
  const handleDelete = (ind) => {
    setData((data) => ({
      ...data,
      contestQuestions: data.contestQuestions.filter((ele, inx) => inx != ind),
    }));
  };
  const setContestProblem = (problem, ind) => {
    let ndata = { ...data, contestQuestions: [...data.contestQuestions] };
    ndata.contestQuestions[ind] = problem;
    setData(ndata);
  };
  const handleContestAdd = async () => {
    setError("");
    const validateRes = validate(data);
    if (validateRes.error) return setError(validateRes.error);
    try {
      const res = await addContest({
        variables: { newContest: validateRes.data },
      });
      // console.log(res);
    } catch (ex) {
      // console.log(ex, ex.message);
      setError(ex.message || "Error creating contest!!");
    }
  };
  return (
    <div className="container mx-auto p-2 text-black min-h-[90dvh]">
      <div className="flex divide-x border rounded items-center overflow-x-scroll">
        <Title
          name="Datails"
          handleMenu={handleMenu}
          ind={-1}
          menu={menu}
          handleDelete={handleDelete}
        />
        {data.contestQuestions.map((ele, ind) => (
          <Title
            key={ind}
            name={`Problem ${ind + 1}`}
            ind={ind}
            handleMenu={handleMenu}
            menu={menu}
            handleDelete={handleDelete}
          />
        ))}
        <div
          className="px-4"
          onClick={() => {
            setData((data) => ({
              ...data,
              contestQuestions: [...data.contestQuestions, {}],
            }));
            setMenu(data.contestQuestions.length);
          }}
        >
          <GrAdd className="text-xl cursor-pointer hover:scale-110" />
        </div>
      </div>
      <div className="">
        {menu == -1 ? (
          <div className="border my-4 p-4 w-full flex">
            <div className="w-1/2">
              <Input
                data={data}
                setData={handleChange}
                title="name"
                type="text"
              />
              <Input
                data={data}
                setData={handleChange}
                title="url"
                type="text"
              />
              <Input
                data={data}
                setData={handleChange}
                title="startTime"
                type="date"
              />
              <Input
                data={data}
                setData={handleChange}
                title="endTime"
                type="date"
              />
            </div>
            <div className="w-1/2">
              <h1>Selected Problems</h1>
              {data.contestQuestions.map((ele, ind) => (
                <p key={ele.id} className="p-2">{`problem ${ind + 1}: ${
                  ele?.title ? ele.title : "Not selected"
                }`}</p>
              ))}
            </div>
          </div>
        ) : (
          <div className="border my-4 p-4">
            <Question
              problem={data.contestQuestions[menu]}
              setContestProblem={setContestProblem}
              ind={menu}
            />
          </div>
        )}
      </div>
      {error && (
        <p className="p-2 border border-red-800 bg-red-400 rounded">{error}</p>
      )}
      <div className="flex justify-center w-full m-4">
        <button
          className="bg-green-400 px-4 py-1.5 rounded hover:bg-green-300"
          onClick={handleContestAdd}
          disabled={loading}
        >
          {loading ? "Loading..." : "Create Contest"}
        </button>
      </div>
    </div>
  );
};

export default Create;

const Title = ({ name, handleMenu, ind, menu, handleDelete }) => {
  return (
    <span
      className={`min-w-fit relative px-4 py-2 cursor-pointer group ${
        ind == menu ? "bg-neutral-200" : ""
      }`}
      onClick={() => handleMenu(ind)}
    >
      {name}
      {ind != -1 && (
        <CgClose
          className="absolute hidden group-hover:flex top-0 right-0 text-sm text-red-500 rounded-full border border-red-500"
          onClick={() => handleDelete(ind)}
        />
      )}
    </span>
  );
};

const Input = ({ title, type, data, setData }) => {
  return (
    <div className="flex gap-4 bg-white items-center my-3">
      <label className="w-24">{title}</label>
      {type == "text" && (
        <input
          type="text"
          name={title}
          value={data[title]}
          className="border rounded p-2 appearance-none bg-white"
          onChange={setData}
        />
      )}
      {type == "date" && (
        <input
          className="appearance-none p-2 rounded bg-white border"
          name={title}
          type="datetime-local"
          value={data[title]}
          onChange={setData}
        />
      )}
    </div>
  );
};

const validate = (data) => {
  const { name, url, startTime, endTime, contestQuestions } = data;
  let pids = [];
  if (!name) return { error: "name is required!!" };
  if (!url) return { error: "url is required!!" };
  if (!startTime) return { error: "start time is required!!" };
  if (!endTime) return { error: "end time required!!" };
  if (!contestQuestions.length)
    return { error: "must contain atlest one problem!" };
  let ok = -1;
  contestQuestions.forEach((problem, ind) => {
    if (problem.id) pids.push(problem.id);
    else {
      ok = ind;
    }
  });
  if (ok != -1) return { error: `Not selected problem ${ok + 1}` };
  return { data: { ...data, contestQuestions: pids } };
};
