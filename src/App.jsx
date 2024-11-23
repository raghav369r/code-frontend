import AllRoutes from "./config/routes";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/User";
import useGetUser from "./hooks/useGetUser";
import CodesContext from "./context/Codes";
import { useState } from "react";
const App = () => {
  const { user, setUser, loading } = useGetUser();
  const [codes, setCodes] = useState([]);
  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      <CodesContext.Provider value={{ codes, setCodes }}>
        <BrowserRouter>
          <main className="font-poppins">
            <AllRoutes />
          </main>
        </BrowserRouter>
      </CodesContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
