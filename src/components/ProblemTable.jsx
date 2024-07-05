import React from "react";
import useGetAllProblems from "../hooks/useGetAllProblems";
import { NavLink } from "react-router-dom";

const ProblemTable = () => {
  const [data, error, loading] = useGetAllProblems();
  const dummyData = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      contestName: "LeetCode Weekly Contest 1",
    },
    {
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      contestName: "LeetCode Weekly Contest 2",
    },
    {
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      contestName: "LeetCode Weekly Contest 3",
    },
    {
      title: "Binary Tree Inorder Traversal",
      difficulty: "Easy",
      contestName: "LeetCode Weekly Contest 4",
    },
    {
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      contestName: "LeetCode Weekly Contest 5",
    },
    {
      title: "Reverse Nodes in k-Group",
      difficulty: "Hard",
      contestName: "LeetCode Weekly Contest 6",
    },
    {
      title: "Valid Parentheses",
      difficulty: "Easy",
      contestName: "LeetCode Weekly Contest 7",
    },
    {
      title: "Container With Most Water",
      difficulty: "Medium",
      contestName: "LeetCode Weekly Contest 8",
    },
    {
      title: "Trapping Rain Water",
      difficulty: "Hard",
      contestName: "LeetCode Weekly Contest 9",
    },
    {
      title: "Climbing Stairs",
      difficulty: "Easy",
      contestName: "LeetCode Weekly Contest 10",
    },
    {
      title: "Minimum Path Sum",
      difficulty: "Medium",
      contestName: "LeetCode Weekly Contest 11",
    },
    {
      title: "Edit Distance",
      difficulty: "Hard",
      contestName: "LeetCode Weekly Contest 12",
    },
    {
      title: "Same Tree",
      difficulty: "Easy",
      contestName: "LeetCode Weekly Contest 13",
    },
    {
      title: "Course Schedule",
      difficulty: "Medium",
      contestName: "LeetCode Weekly Contest 14",
    },
  ];

  return (
    <div className="container mx-auto text-lg ">
      <h1 className="text-center text-amber-700 text-2xl p-4 font-semibold">
        Practice Problems from previous Contests
      </h1>
      <table className="w-full">
        <tr className="text-gray-500 text-center border-b">
          <td className="p-3">Status</td>
          <td className="p-3">Title</td>
          <td className="p-3">Difficulty</td>
          <td className="p-3">Contest</td>
        </tr>
        {data?.problems?.map((ele, ind) => (
          <tr key={ind} className="text-black even:bg-neutral-100">
            <td className="p-3"></td>
            <td className="p-3 line-clamp-1 hover:text-blue-600 cursor-pointer">
              <NavLink to={"/problem/" + ele.id}>
                {ind + 1 + ". " + ele.title}
              </NavLink>
            </td>
            <Difficulty difficulty={ele.difficulty} />
            <td className="p-3 line-clamp-1">{ele.contestName}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
// const a="";
// a.to
const Difficulty = ({ difficulty }) => {
  if (difficulty.toLowerCase() == "hard")
    return <td className="p-3 text-amber-900">Hard</td>;
  if (difficulty.toLowerCase() == "medium")
    return <td className="p-3 text-yellow-500">Medium</td>;
  if (difficulty.toLowerCase() == "easy")
    return <td className="p-3 text-green-700">Easy</td>;
  return <td className="p-3 text-green-700">N/A</td>;
};

export default ProblemTable;
