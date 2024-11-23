import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { FaAngleRight, FaLocationPin } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PiListChecksBold } from "react-icons/pi";
import { MdCloudDone, MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GetAllSubmissions,
  GetSolvedCountBylanguage,
  GetUser,
  PastParticipated,
} from "../../graphQL/Quary";
import { FaUserAlt } from "react-icons/fa";

const Profile = () => {
  const { userId } = useParams();
  const { user: rootUser } = useContext(UserContext);
  const [getUser, { data: userData }] = useLazyQuery(GetUser);
  const [langCount, { data: langData }] = useLazyQuery(
    GetSolvedCountBylanguage
  );
  useEffect(() => {
    const get = async (id) => {
      await getUser({ variables: { userId: id } });
      await langCount({ variables: { userId: id } });
    };
    userId ? get(userId) : get(rootUser?.id);
  }, [userId]);
  const [rc, setRc] = useState(true);
  const { data, error, loading } = useQuery(GetAllSubmissions, {
    variables: { userId: userId ? userId : rootUser?.id },
  });
  const { data: condata } = useQuery(PastParticipated, {
    variables: { userId: userId ? userId : rootUser?.id },
  });
  const { submissions } = data || {};
  const navigate = useNavigate();
  // console.log(langData);
  return (
    <div className="bg-[#f7f8fa] w-full min-h-[95vh]">
      <div className="px-4 py-10 gap-4 text-gray-500 flex flex-col md:flex-row">
        <div className="p-4 bg-white shadow-md rounded-2xl flex flex-col gap-3 h-fit w-fit min-w-[320px] max-w-[550px] mx-auto">
          <div className="flex gap-3 items-center">
            <div className="min-h-32 min-w-32 rounded-full bg-neutral-100 p-5 hover:bg-slate-100 ">
              <FaUserAlt className=" size-full text-gray-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">
                {userData?.user?.firstName + " " + userData?.user?.lastName}
              </p>
              <p>{"@" + userData?.user?.userName}</p>
            </div>
          </div>
          {!userId && (
            <button
              className="text-green-500 bg-green-500 bg-opacity-25 py-2 px-4 rounded-lg"
              onClick={() => navigate("edit")}
            >
              Edit Profile
            </button>
          )}
          <div className="flex gap-4 items-center overflow-x-scroll">
            <FaLocationPin className="text-2xl min-w-fit" />
            <span>India</span>
          </div>
          <div className="flex gap-4 items-center overflow-x-scroll">
            <MdEmail className="text-2xl min-w-fit" />
            <span>{userData?.user?.email || "not Set"}</span>
          </div>
          <div className="flex gap-4 items-center overflow-x-scroll">
            <LiaLinkedin className="text-2xl min-w-fit" />
            <a href={userData?.user?.linkedinLink || null} className="text-sm">
              {userData?.user?.linkedinLink || "not Set"}
            </a>
          </div>
          <div className="flex gap-4 items-center overflow-x-scroll">
            <BsGithub className="text-2xl min-w-fit" />
            <a
              href={userData?.user?.githubLink || null}
              className="text-sm"
              target="_blank"
            >
              {userData?.user?.githubLink ? "GitHub" : "not Set"}
            </a>
          </div>
          <div className="flex gap-4 items-center overflow-x-scroll">
            <FaLink className="text-2xl min-w-fit" />
            <a
              className="text-sm"
              href={userData?.user?.portfolioLink || null}
              target="_blank"
            >
              {userData?.user?.portfolioLink ? "portfolio" : "not Set"}
            </a>
          </div>
          <hr />
          <h1 className="text-black">Languages</h1>
          <div className="flex flex-col gap-2">
            {langData?.languageCount &&
              Object.entries(langData.languageCount).map(([key, val]) => (
                <Language language={key} solved={val} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full min-w-500px overflow-x-scroll">
          <div className="p-4 bg-white rounded-2xl shadow-lg h-fit">
            <h1 className="text-balck text-lg font-semibold text-center">
              Participated contests
            </h1>
            <table className="w-full p-2 ">
              <tr className="text-gray-600 font-semibold border-b">
                <td className="p-3 line-clamp-1">name</td>
                <td className="">oraganisation</td>
                <td>Time</td>
              </tr>
              {condata?.contests?.map((ele, ind) => (
                <tr
                  key={ind}
                  className="text-black even:bg-neutral-100 border-b "
                >
                  <td className="p-3 line-clamp-1 hover:text-blue-600 cursor-pointer">
                    <Link to={"/contest/view/" + ele.url}>{ele?.name}</Link>
                  </td>
                  <td className="">{ele?.organisation}</td>
                  <td>{new Date(ele?.startTime).toLocaleString()}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-lg h-fit">
            <div className="flex justify-between">
              <ul className="flex gap-4 cursor-pointer">
                <li
                  onClick={() => setRc(true)}
                  className={
                    " flex items-center gap-2 text-black py-2 px-4 rounded-md hover:bg-slate-100" +
                    (rc ? " bg-slate-200" : "")
                  }
                >
                  <span>
                    <PiListChecksBold className="size-full" />
                  </span>
                  Recent Acc
                </li>
                <li
                  onClick={() => setRc(false)}
                  className={
                    "flex items-center gap-2 text-black py-2 px-4 rounded-md hover:bg-slate-100" +
                    (rc ? "" : " bg-slate-200")
                  }
                >
                  <span>
                    <MdCloudDone className="size-full" />
                  </span>
                  Recent submitted
                </li>
              </ul>
              {!userId && (
                <Link to={"allsubmissions"} className="flex gap-2 items-center">
                  <h1 className="text-sm">View all submissions</h1>
                  <FaAngleRight />
                </Link>
              )}
            </div>
            <table className="w-full p-2">
              <tbody>
                <tr className="text-gray-600 font-semibold border-b">
                  <td className="p-3 line-clamp-1 ">Title</td>
                  <td className="">Done in contest</td>
                  <td>Submitted At</td>
                </tr>
                {submissions?.map((ele, ind) =>
                  ele.isAccepted || !rc ? (
                    <tr
                      key={ind}
                      className="text-black even:bg-neutral-100 border-b"
                    >
                      <td className="p-3 line-clamp-1 hover:text-blue-600 cursor-pointer">
                        <Link to={"/problem/" + ele.problemId}>
                          {ele?.problem.title}
                        </Link>
                      </td>
                      <td className="">{ele.isInContest ? "true" : "false"}</td>
                      <td>{new Date(ele.submittedAt).toLocaleString()}</td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Language = ({ language, solved }) => {
  if (language === "__typename") return null;
  return (
    <div className="flex justify-between">
      <h1 className="px-2 py-1 min-w-12 text-center rounded-full bg-gray-200  text-xs">
        {language.toUpperCase()}
      </h1>
      <h1 className=" text-sm">
        <span className="font-semibold text-xs">{solved}</span> problems solved
      </h1>
    </div>
  );
};

export default Profile;

// for leetcode Profile
// operationName: "userProfileUserQuestionProgressV2";
// query: "\n    query userProfileUserQuestionProgressV2($userSlug: String!) {\n  userProfileUserQuestionProgressV2(userSlug: $userSlug) {\n    numAcceptedQuestions {\n      count\n      difficulty\n    }\n    numFailedQuestions {\n      count\n      difficulty\n    }\n    numUntouchedQuestions {\n      count\n      difficulty\n    }\n    userSessionBeatsPercentage {\n      difficulty\n      percentage\n    }\n  }\n}\n    ";
// variables: {
//   userSlug: "raghav_reddyy";
// }
