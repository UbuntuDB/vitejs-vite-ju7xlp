import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/login">Ingresar</Link></li>
          <li><Link to="/register">Registrarse</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;