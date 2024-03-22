import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import DetallePersonaje from "./DetallePersonaje";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/personajes" element={<Home />} />
      <Route path="/personajes/view/:id" element={<DetallePersonaje />} />
    </Routes>
  );
};
export default Pages;
