import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-title">SANTI TORRES 3D</Link>
        <div className="navbar-divider"></div>
      </div>
      <button className="menu-toggle" aria-label="Toggle navigation">☰</button>
      <nav className="navbar-right">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
        <Link to="/about" className="nav-link">ABOUT ME</Link>
        <Link to="/contact" className="nav-link">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Navbar;
