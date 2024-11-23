import React from "react";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];
const TableShimmer = () => {
  return (
    <>
      {data.map((ele, ind) => (
        <div className="even:bg-gray-300 animate-pulse h-10 w-screen" key={ind} />
      ))}
    </>
  );
};

export default TableShimmer;
