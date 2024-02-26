import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full flex p-2 shadow-md">
      <div className="flex gap-2">
        <div>
          <img className="rounded-full" width={200} src="../../public/logo/logo.png" alt="logo"/>
        </div>
        <nav className="w-full">
          <ul className="flex gap-5">
            <li>Empresa</li>
            <li>
              <p>Produtos</p>
              <ul>
                <li>Canecas</li>
                <li><Link to="estampas">Estampas</Link></li>
              </ul>
            </li>
            <li>
              <Link to="contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}