import React, { useState } from "react";
import { PiTextbox } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import Footer from "../Footer";

const Login = () => {
  const [newUser, setNewUser] = useState(true);
  const [data, setData] = useState({ userName: "", email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    var ndata = { ...data };
    ndata[name] = value;
    setData(ndata);
  };
  const handleUser = (newUser) => {
    setData({ userName: "", email: "", password: "" });
    setNewUser(newUser);
  };
  return (
    <>
      <div className="bg-light-bg h-screen w-screen pt-20">
        <div className="md:flex flex-row items-center justify-around container mx-auto">
          <div className="">
            <h1 className="text-gray-700 text-3xl font-semibold py-4">
              Sign up on Coderbyte
            </h1>
            <h2 className="text-gray-500 text-2xl font-semibold py-4">
              Access your account or get started with us
            </h2>
            <div className="flex gap-4">
              <span onClick={() => handleUser(false)}>
                <Button data="Login" selected={!newUser} />
              </span>
              <span onClick={() => handleUser(true)}>
                <Button data="Sign Up" selected={newUser} />
              </span>
            </div>
            <div className="bg-form bg-opacity-10 my-5">
              {newUser && (
                <Input
                  handleChange={handleChange}
                  data={data}
                  placeholder="User Name"
                  type="text"
                  name="userName"
                  Logo={PiTextbox}
                />
              )}
              <Input
                handleChange={handleChange}
                data={data}
                placeholder="Email"
                type="email"
                name="email"
                Logo={MdOutlineEmail}
              />
              <Input
                handleChange={handleChange}
                data={data}
                placeholder="Password"
                type="password"
                name="password"
                Logo={MdOutlinePassword}
              />
            </div>
            <Button
              data={newUser ? "Create Account" : "Login"}
              selected={true}
            />
          </div>
          <img src="/images/login1.png" className="hidden md:block" />
        </div>
      </div>
        <Footer />
    </>
  );
};

const Button = ({ data, selected }) => (
  <button
    className={`px-6 py-4 border-2 border-sky-500 font-semibold  ${
      selected ? "bg-sky-500" : ""
    }`}
  >
    {data}
  </button>
);
const Input = ({ type, Logo, placeholder, name, handleChange, data }) => (
  <div className="flex p-5 bg-form gap-4 items-center">
    <Logo color="gray" />
    <input
      name={name}
      value={data[name]}
      type={type}
      className="appearence-none outline-0 w-full bg-form"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default Login;
