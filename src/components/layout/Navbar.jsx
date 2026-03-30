import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Gamepad2, Menu, X, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Gamepad2 size={20} />
          </span>
          <span className="brand-text">yngStudio</span>
        </Link>

        <nav className="desktop-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="/apps">Apps</NavLink>
        </nav>

        <a href="mailto:aadarshraj4321@gmail.com" className="btn btn-primary desktop-contact">
          <Mail size={16} />
          Contact
        </a>

        <button className="mobile-menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/games" onClick={closeMenu}>Games</NavLink>
          <NavLink to="/apps" onClick={closeMenu}>Apps</NavLink>
          <a href="mailto:aadarshraj4321@gmail.com" className="btn btn-primary">
            <Mail size={16} />
            Contact
          </a>
        </div>
      )}
    </header>
  );
}