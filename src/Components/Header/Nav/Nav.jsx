import React from 'react'
import { Link } from 'react-router-dom';
function Nav({menuDesplegado, onLinkClick }) {
  const handleLinkClick = () => {
    onLinkClick();
  };

  return (
    <>
    <nav className={`nav ${menuDesplegado ? 'desplegado' : ''}`}>
        <ul>
        <li ><Link className="nav__enlace" to="/" onClick={handleLinkClick}>Inicio</Link></li>
            <li ><Link className="nav__enlace" to="/about" onClick={handleLinkClick}>Sobre mi</Link></li>
            <li ><Link className="nav__enlace" to="/proyectos" onClick={handleLinkClick}>Proyectos</Link></li>
            <li ><Link className="nav__enlace" to="" onClick={handleLinkClick}>Contacto</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Nav