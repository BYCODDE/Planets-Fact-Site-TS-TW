import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Singleplanet from "./pages/Singleplanet";
import { useState } from "react";
import burger_svg from "/assets/icon-hamburger.svg";

function App() {
  const [Burger, setBurger] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Menu
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
    </BrowserRouter>
  );
}

export default App;
