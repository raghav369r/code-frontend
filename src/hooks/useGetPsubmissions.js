import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GetProblemSubmissions } from "../../graphQL/Quary"; // Corrected 'Quary' to 'Query'

const useGetPsubmissions = (problemId) => {
  const [submissions, setSubmissions] = useState([]);
  const [getSubmissions, { data: pdata }] = useLazyQuery(GetProblemSubmissions);

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (problemId) {
        await getSubmissions({ variables: { problemId } });
      }
    };

    fetchSubmissions();
  }, [problemId, getSubmissions]);

  useEffect(() => {
    if (pdata && pdata.submissions) {
      setSubmissions(pdata.submissions);
    }
  }, [pdata]);

  return { submissions, setSubmissions };
};

export default useGetPsubmissions;
