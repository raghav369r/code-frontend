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
        <li>
          <button
            className={`py-1.5 px-4 border-r ${page == 1 ? "text-gray-500" : ""}`}
            onClick={() => handleChange(-1)}
            disabled={page === 1}
          >
            Previous
          </button>
        </li>

        <li className="py-1.5 px-5 border-r ">{page}</li>
        <li>
          <button className="py-1.5 px-4" onClick={() => handleChange(1)}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
