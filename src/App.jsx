import React, { useEffect, useState } from "react";
import AllRoutes from "./config/routes";
import { BrowserRouter } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LoginUser } from "../graphQL/Quary";
import { UserContext } from "./context/User";
const App = () => {
  const { data, error, loading } = useQuery(LoginUser, {
    variables: { email: "ajju@gmail.com", password: "12345" },
  });
  console.log(data);
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <main>
          <AllRoutes />
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;

// <div className="container h-screen mx-auto bg-black p-10 flex justify-center items-center">
//   <div className="h-[50vh] w-2/3">
//   </div>
// </div>
