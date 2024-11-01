import client from "../client";
import { getComments } from "./Quary";
export const addQuery = (data, problemId) => {
  console.log(data, problemId);
  const prev = client.readQuery({
    query: getComments,
    variables: {
      problemId,
      limit: 10,
      page: 0,
    },
  });
  console.log("prev: ", prev);
  client.writeQuery({
    query: getComments,
    data: {
      comments: [data, ...(prev?.comments || [])],
    },
    variables: {
      problemId,
    },
  });
};

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