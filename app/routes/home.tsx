import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import "./home.css"
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
    <header>
      <h1>Basket Club Emari</h1>
      <p>Pasión, trabajo en equipo y espíritu deportivo</p>
    </header>

    <nav>
      <a href="#nosotros">Nosotros</a>
      <a href="#entrenamientos">Entrenamientos</a>
      <a href="#contacto">Contacto</a>
      <a href="#campamento">Campamento</a>
    </nav>

    <section id="nosotros">
      <h2>Sobre el Club</h2>
      <p>
        Basket Club Emari somos un club de baloncesto fundado en 2006 en El Puerto de Santa María, Cádiz. Contamos con equipos en varias categorías: infantil, juvenil y senior. Nuestro objetivo es fomentar el deporte,
        el compañerismo y el desarrollo personal a través del baloncesto.
      </p>
    </section>

    <section id="entrenamientos">
      <h2>Horarios de Entrenamiento</h2>
      <ul>
        <li><strong>Infantil:</strong> Lunes y Miércoles, 17:00 - 18:30</li>
        <li><strong>Juvenil:</strong> Martes y Jueves, 18:30 - 20:00</li>
        <li><strong>Senior:</strong> Miércoles y Viernes, 20:00 - 22:00</li>
      </ul>
    </section>

    <section id="contacto">
      <h2>Contacto</h2>
      <p>📍 Pabellón Municipal, Calle Deportiva 123, El Puerto de Santa María, Cádiz</p>
      <p>📞 Teléfono: +34 600 123 456</p>
      <p>✉️ Email: info@clubhalcones.es</p>
    </section>

    <section id="campamento">
      <h2>Campamento de Verano 2025</h2>
      <p>
        ¡Únete a nuestro campamento de verano de baloncesto! Una experiencia inolvidable para chicos y chicas de 10 a 18 años, con entrenadores profesionales, actividades al aire libre y mucha diversión.
      </p>
      <ul>
        <li>📅 Fechas: Del 1 al 14 de julio de 2025</li>
        <li>📍 Lugar: Centro Deportivo Sierra Alta</li>
        <li>🏀 Entrenamientos técnicos, torneos y juegos</li>
        <li>🎒 Alojamiento, comidas y seguro incluidos</li>
      </ul>
      <p>
        Para más información e inscripciones, escríbenos a: <strong>campamento@bce.es</strong>
      </p>
    </section>

    <footer>
      <p>© 2025 Basket Club Emari - Todos los derechos reservados</p>
    </footer>
  </div>
  );
}
