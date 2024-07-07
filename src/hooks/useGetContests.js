import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GetUpcomingContests } from "../../graphQL/Quary";

const useGetContests = () => {
  const [allContests, setAllContests] = useState({
    upComing: [],
    rigistered: [],
    pastParticipated: [],
  });
  const { data, error, loading } = useQuery(GetUpcomingContests, {
    onCompleted: ({ upComing }) => {
      setAllContests({ ...allContests, upComing });
    },
  });
  return allContests;
};

export default useGetContests;
