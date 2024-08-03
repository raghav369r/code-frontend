import React from "react";

const Paginate = ({ page, setPage }) => {
  const handleChange = (add) => {
    const newPage = page + add;
    if (!newPage) return;
    setPage(newPage);
  };
  return (
    <div className="flex justify-end">
      <ul className="border rounded-md flex text-blue-700 w-fit m-3 select-none">
        <li
          className={`p-3 border-r cursor-pointer ${page==1?"text-gray-500":""}`}
          onClick={() => handleChange(-1)}
        >
          Previous
        </li>
        <li className="p-3 px-5 border-r ">{page}</li>
        <li className="p-3 cursor-pointer" onClick={() => handleChange(1)}>
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
