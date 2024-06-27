import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../components/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      {/* <Route element={<RootLayout />}>
        <Route path="/explore" element={<Explore />} />
        <Route path="/people" element={<AllPeople />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/user/:userId" element={<User />} />
      </Route> */}
    </Routes>
  );
};

export default AllRoutes;
