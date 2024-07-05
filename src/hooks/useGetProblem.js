import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GetProblem } from "../../graphQL/Quary";

const useGetProblem = (id) => {
  const [getProblem, { data, error, loading }] = useLazyQuery(GetProblem);
  useEffect(() => {
    const start = async () => {
      const res = await getProblem({ variables: { getProblemId: id } });
      console.log(res);
    };
    if (id) start();
  }, [id]);
  return [data, error, loading];
};

export default useGetProblem;
