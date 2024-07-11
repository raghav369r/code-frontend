import AllRoutes from "./config/routes";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/User";
import useGetUser from "./hooks/useGetUser";
import { useState } from "react";
const App = () => {
  const [user, setUser] = useGetUser();
  const [varified, setVarified] = useState(false);
  const [isInteractingWithRecaptcha, setIsInteractingWithRecaptcha] =
    useState(true);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        varified,
        setVarified,
        isInteractingWithRecaptcha,
        setIsInteractingWithRecaptcha,
      }}
    >
      <BrowserRouter>
        <main>
          <AllRoutes />
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
