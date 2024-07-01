import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { useLazyQuery } from "@apollo/client";
import { GetUser } from "../../graphQL/Quary";

const useGetUser = () => {
  const [user, setUser] = useState("");
  const [getuser] = useLazyQuery(GetUser);
  useEffect(() => {
    const start = async () => {
      const res = await getuser();
    //   console.log(res.data);
      setUser(res?.data?.user);
    };
    start();
  }, []);
  return [user, setUser];
};

export default useGetUser;
