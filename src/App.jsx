import React, { useEffect } from "react";
import AllRoutes from "./config/routes";
import { BrowserRouter } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LoginUser } from "../graphQL/Quary";
const App = () => {
  const { data, error, loading } = useQuery(LoginUser, {
    variables: { email: "ajju@gmail.com", password: "12345" },
  });
  console.log(data);
  return (
    <BrowserRouter>
      <main>
        <AllRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;

// <div className="container h-screen mx-auto bg-black p-10 flex justify-center items-center">
//   <div className="h-[50vh] w-2/3">
//   </div>
// </div>
