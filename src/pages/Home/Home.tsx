import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <footer>
        <p>arteof.grafica@gmail.com</p>
      </footer>
    </div>
  );
}