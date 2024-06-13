import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Singleplanet from "./pages/Singleplanet";
import { useState } from "react";

function App() {
  const [Burger, setBurger] = useState<boolean>(false);

  return (
    <>
      <BrowserRouter>
        {/* <Menu Burger={Burger} setBurger={setBurger} />{" "} */}
        <Routes>
          <Route
            path="/"
            element={<Menu Burger={Burger} setBurger={setBurger} />}
          />
          <Route path="/planet/:name" element={<Singleplanet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
