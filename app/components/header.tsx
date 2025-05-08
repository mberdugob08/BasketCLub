
import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            <h1>Basket Club Emari</h1>
            <p>Pasión, trabajo en equipo y espíritu deportivo</p>
            <nav>
                <a href="#nosotros">Nosotros</a>
                <a href="#entrenamientos">Entrenamientos</a>
                <a href="#contacto">Contacto</a>
                <a href="#campamento">Campamento</a>
                <a href="#logros">Logros</a>
                <a href="#entrenadores">Entrenadores</a>
                <a href="#formularios">Formularios</a>
                <Link to="/historia">Historia del Club</Link>
                <Link to="/tienda">Tienda Oficial</Link>
            </nav>
        </header>
    )
    
}
