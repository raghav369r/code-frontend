import MDEditor from "@uiw/react-md-editor";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/User";
import { useMutation, useQuery } from "@apollo/client";
import { getComments } from "../../graphQL/Quary";
import { addComment } from "../../graphQL/Mutations";
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Discussion = ({ problemId }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const { data, error } = useQuery(getComments, {
    variables: { problemId, limit: 10, page: 0 },
  });
  const [postComment, { loading }] = useMutation(addComment);
  const [show, setShow] = useState(false);
  const onChange = (e) => {
    setComment(e);
  };
  const handlePost = async () => {
    if (!comment || comment.length < 2) return;

    try {
      await postComment({
        variables: { problemId, comment },
        // update cache get commets by adding newly added comment
        // if you donot f=do above you need to again request server for latest comments
        update: (cache, { data: { addComment: newComment } }) => {
          // read existing data from cache
          const existingData = cache.readQuery({
            query: getComments,
            variables: { problemId, limit: 10, page: 0 },
          });

          const existingComments = existingData?.comments || [];
          // add new comment to query
          cache.writeQuery({
            query: getComments,
            variables: { problemId, limit: 10, page: 0 },
            data: {
              comments: [newComment, ...existingComments],
            },
          });
        },
      });
      setComment("");
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(!show)}>
        <h1 className="p-3 font-semibold">Discussions</h1>
        <span>
          <FaChevronDown className="text-xl text-gray-700" />
        </span>
      </div>
      {show && (
        <div className="">
          {user && (
            <>
              <MDEditor height="20vh" value={comment} onChange={onChange} />
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-green-500 rounded-lg my-4 hover:scale-110"
                  onClick={handlePost}
                >
                  Post
                </button>
              </div>
            </>
          )}
          <div className="h-4" />
          {data &&
            data?.comments.map((ele) => <Comment ele={ele} key={ele.id} />)}
        </div>
      )}
    </>
  );
};

const Comment = ({ ele }) => {
  const { user, comment, time } = ele || {};
  return (
    <div className="border rounded p-2 my-2">
      <div className="flex justify-between items-center text-gray-600 border-b">
        <a
          className="flex gap-2 items-center cursor-pointer"
          href={`/profile/id/${user.id}`}
          target="_blank"
        >
          <FaRegUser className="text-3xl p-1 border rounded-full text-gray-400" />
          <h2>{user?.userName}</h2>
        </a>
        <span>{time}</span>
      </div>
      <MDEditor.Markdown source={comment} className="py-2" />
    </div>
  );
};

export default Discussion;
