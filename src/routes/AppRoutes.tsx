import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Estampas from "../pages/Estampas/Estampas";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/estampas" element={<Estampas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )  
}