import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-title">SANTI TORRES 3D</Link>
        <div className="navbar-divider"></div>
      </div>
      {/* Botón toggle con un onClick para alternar el menú */}
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
        ☰
      </button>
      {/* El nav recibe la clase "active" si isOpen es true */}
      <nav className={`navbar-right ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
        <Link to="/about" className="nav-link">ABOUT ME</Link>
        <Link to="/contact" className="nav-link">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Navbar;
