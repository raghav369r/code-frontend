import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../components/Home";
import HomeLayout from "../components/layouts/HomeLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import Profile from "../components/Profile";
import Edit from "../components/Edit";
import EditorCode from "../components/EditorCode";
import CodeLayout from "../components/layouts/CodeLayout";
import Test from "../components/test";
import ProblemTable from "../components/ProblemTable";
import SolveProblem from "../components/SolveProblem";
import Create from "../components/contest/Create";
import SubmissionsTable from "../components/SubmissionsTable";
import ContestHome from "../components/contest/ContestHome";
import ContestProblems from "../components/contest/ContestProblems";
import ContestLayout from "../components/layouts/ContestLayout";
import ContestStart from "../components/contest/ContestStart";
import OrganisedContests from "../components/organised/OrganisedContests";

const AllRoutes = () => {
  return (
    <div className="relative">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/problems" element={<ProblemTable />} />
        </Route>
        <Route
          path="contest/participate/:contestURL"
          element={<ContestLayout />}
        >
          <Route index element={<ContestProblems />} />
          <Route path="solve/:problemId" element={<SolveProblem />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/organised">
            <Route index element={<OrganisedContests />} />
          </Route>
          <Route path="/contest">
            <Route index element={<ContestHome />} />
            <Route path=":contestURL" element={<ContestStart />} />
            <Route path="create" element={<Create />} />
            <Route
              path="responseClosed"
              element={
                <div className="h-[90vh] w-full flex flex-col justify-center  items-center text-red-600">
                  <h1 className=" text-2xl ">
                    you cant open as you are alredy opened or made excessive
                    tabswitches
                  </h1>
                  <h1 className=" text-2xl ">
                    Contact organiser for more details
                  </h1>
                </div>
              }
            />
          </Route>
          <Route path="/profile/:userId?">
            <Route index element={<Profile />} />
            <Route path="edit" element={<Edit />} />
            <Route path="allsubmissions" element={<SubmissionsTable />} />
          </Route>
        </Route>
        <Route element={<CodeLayout />}>
          <Route path="/playground" element={<EditorCode />} />
          <Route path="/problem/:problemId" element={<SolveProblem />} />
          <Route path="/contest/view/:contestURL">
            <Route index element={<ContestProblems />} />
            <Route path="solve/:problemId" element={<SolveProblem />} />
          </Route>
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
