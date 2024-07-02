import AllRoutes from "./config/routes";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/User";
import useGetUser from "./hooks/useGetUser";
const App = () => {
  const [user, setUser] = useGetUser();
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
