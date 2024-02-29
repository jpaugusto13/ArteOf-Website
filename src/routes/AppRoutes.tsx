import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Estampas from "../pages/Estampas/Estampas";
import Calculadora from "../components/Calculadora/Calculadora";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/estampas" element={<Estampas />} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )  
}