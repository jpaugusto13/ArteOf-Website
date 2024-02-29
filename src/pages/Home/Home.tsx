import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <main className="flex flex-col p-2 justify-center items-center">
        <Outlet />
      </main>
      <footer>
        <p>arteof.grafica@gmail.com</p>
      </footer>
    </div>
  );
}