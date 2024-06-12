import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Singleplanet from "./pages/Singleplanet";



function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/planet/:name" element={<Singleplanet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
