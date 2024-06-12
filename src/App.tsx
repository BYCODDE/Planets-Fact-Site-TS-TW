import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="mercury" element={<Mercury />} />
          <Route path="venus" element={<Venus />} />
          <Route path="earth" element={<Earth />} />
          <Route path="mars" element={<Mars />} />
          <Route path="jupiter" element={<Jupiter />} />
          <Route path="saturn" element={<Saturn />} />
          <Route path="uranus" element={<Uranus />} />
          <Route path="neptune" element={<Neptune />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
