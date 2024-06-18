import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Singleplanet from "./pages/Singleplanet";
import burger_svg from "/assets/icon-hamburger.svg";
import data from "./data.json";
function App() {
  const location = useLocation();
  const [Burger, setBurger] = useState<boolean>(false);
  const navigate = useNavigate();
  const name = data.map((planet) => planet.name.toLowerCase());

  useEffect(() => {
    const splited = location.pathname.split("/");
    if (!name.includes(splited[2])) {
      navigate("/planet/mercury/overview");
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/planet/mercury"
        element={
          <Singleplanet
            Burger={Burger}
            setBurger={setBurger}
            burger_svg={burger_svg}
          />
        }
      />
      <Route
        path="/planet/:name"
        element={
          <Singleplanet
            Burger={Burger}
            setBurger={setBurger}
            burger_svg={burger_svg}
          />
        }
      />
      <Route
        path="/planet/:name/:details"
        element={
          <Singleplanet
            Burger={Burger}
            setBurger={setBurger}
            burger_svg={burger_svg}
          />
        }
      />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
