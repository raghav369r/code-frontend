import { useContext, useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { GetContestProblems } from "../../../graphQL/Quary";
import { useLazyQuery, useQuery } from "@apollo/client";
import Shimmer from "./Shimmer";
import ReCAPTCHA from "react-google-recaptcha";
import { UserContext } from "../../context/User";

function ContestProblems() {
  const { varified, setVarified } = useContext(UserContext);
  const { contestURL } = useParams();
  const navigate = useNavigate();
  const [getproblem, { data, error, loading }] =
    useLazyQuery(GetContestProblems);
  useEffect(() => {
    varified && getproblem({ variables: { contestUrl: contestURL } });
  }, [varified]);
  const onChange = (value) => {
    // console.log("Captcha value:", value);
    setVarified(!varified);
  };
  if (!varified) {
    return (
      <div
        onClick={onChange}
        className="h-screen w-full flex items-center justify-center"
      >
        <ReCAPTCHA
          sitekey="6Le1NAwqAAAAAEzeuz1TLBivBZ2ifBZ2ubomCM3C"
          onChange={onChange}
        />
      </div>
    );
  }

  // const { data, error, loading } = useQuery(GetContestProblems, {
  //   variables: { contestUrl: contestURL },
  //   // fetchPolicy: "no-cache",
  // });
  const date = new Date();
  const { contestQuestions, name, endTime, startTime, title } =
    data?.contest || {};
  if (error) navigate("/contest/responseClosed");
  if (loading) return <Shimmer />;
  return (
    <div className="container mx-auto text-black">
      <h1 className="text-2xl my-4">{name}</h1>
      {date > new Date(endTime) && (
        <h1 className="p-4 border-[1px] border-gray-300 border-l-[6px] rounded-sm bg-white">
          The contest has ended.
        </h1>
      )}
      <div className="md:flex md:gap-10 mt-10">
        <div className="w-full border border-gray-300 rounded-md md:w-2/5 shadow-md h-fit">
          <div className="flex justify-between border-b border-gray-200 bg-gray-200 p-2">
            <h1 className="">ContestProblem list</h1>
            <h1 className="">Score</h1>
          </div>
          {contestQuestions?.map((ele, ind) => (
            <div
              key={ind}
              className="flex justify-between border-b border-gray-200 bg-white p-2"
            >
              <Link
                to={`solve/${ele.problemId}`}
                className="text-blue-800 cursor-pointer"
              >
                {ele.problem.title}
              </Link>
              <p className="bg-gray-300 px-2 rounded-xl">3</p>
            </div>
          ))}
        </div>
        <div className="w-full border border-gray-300 rounded-md md:w-2/5 shadow-md">
          <h1 className="border-b border-gray-200 bg-gray-200 p-2">Ranking</h1>
          <div className="flex justify-between border-b border-gray-200 bg-white p-2">
            <p className="">Rank</p>
            <p className="">Name</p>
            <p>Score</p>
            <p>finish time</p>
          </div>
          {contestQuestions?.map((ele, ind) => (
            <div
              key={ind}
              className="flex justify-between border-b border-gray-200 bg-white p-2"
            >
              <p className="">{ind + 1}</p>
              <p className="bg-gray-300 px-2 rounded-xl">3</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ContestProblems;
