import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GetAllProblems } from "../../graphQL/Quary";

const useGetAllProblems = () => {
  const [getProbelms, { data, error, loading }] = useLazyQuery(GetAllProblems);
  useEffect(() => {
    const start = async () => {
      await getProbelms();
    };
    start();
  }, []);
  return [data, error, loading];
};

export default useGetAllProblems;
