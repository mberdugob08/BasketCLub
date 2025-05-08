import React from 'react';

const Tienda: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Tienda Oficial</h1>
      <ul>
        <li>🏀 Camiseta oficial del equipo - 25€</li>
        <li>🧢 Gorras con el logo del club - 15€</li>
        <li>🎽 Pantalones de entrenamiento - 20€</li>
      </ul>
      <p>Para comprar, contáctanos a <strong>tienda@bce.es</strong></p>
    </div>
  );
};

export default Tienda;
