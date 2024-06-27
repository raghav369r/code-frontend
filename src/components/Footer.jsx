import React from "react";

const Footer = () => {
  return (
    <div className=" bg-footer md:flex justify-between text-white">
      <div className="md:grid grid-cols-3 gap-8">
        <h1 className="p-2">Blog</h1>
        <h1 className="p-2">Problems</h1>
        <h1 className="p-2">contest</h1>
        <h1 className="p-2">Terms</h1>
        <h1 className="p-2">Privacy policy</h1>
        <h1 className="p-2">Home</h1>
        <h1 className="p-2">Contest</h1>
      </div>
      <div>
        <h1>facebook</h1>
        <h1>insta</h1>
        <h1>linkedin</h1>
      </div>
    </div>
  );
};

export default Footer;
