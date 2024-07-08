import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GetProblemSubmissions } from "../../graphQL/Quary";

const useGetPsubmissions = (problemId) => {
  const [submissions, setSubmissions] = useState([]);
  const { data: pdata } = useQuery(GetProblemSubmissions, {
    variables: { problemId },
    onCompleted: ({ submissions: subs }) => setSubmissions(subs),
  });
  return { submissions, setSubmissions };
};

export default useGetPsubmissions;
