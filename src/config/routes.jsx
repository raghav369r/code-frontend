import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../components/Home";
import HomeLayout from "../components/layouts/HomeLayout";
import PlayGround from "../components/PlayGround";
import AuthLayout from "../components/layouts/AuthLayout";
import Profile from "../components/Profile";
import Edit from "../components/Edit";
import EditorCode from "../components/EditorCode";
import CodeLayout from "../components/layouts/CodeLayout";
import Test from "../components/test";

const AllRoutes = () => {
  return (
    <div className="relative">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playground" element={<PlayGround />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<Edit />} />
        </Route>
        <Route element={<CodeLayout />}>
          <Route path="/editor" element={<EditorCode />} />
        </Route>
        <Route path="/test" element={<Test />} />
        {/* <Route element={<RootLayout />}>
        <Route path="/explore" element={<Explore />} />
        <Route path="/people" element={<AllPeople />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/user/:userId" element={<User />} />
      </Route> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
