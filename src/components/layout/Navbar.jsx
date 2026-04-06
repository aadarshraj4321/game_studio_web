import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Gamepad2, Menu, X, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Gamepad2 size={18} color="white" />
          </span>
          <span className="brand-text">boyinfuture</span>
        </Link>

        <nav className="desktop-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="/apps">Apps</NavLink>
        </nav>

        <a
          href="mailto:aadarshraj4321@gmail.com"
          className="btn btn-primary desktop-contact"
          style={{ fontSize: "0.85rem" }}
        >
          <Mail size={14} />
          Contact
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav container">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/games" onClick={closeMenu}>Games</NavLink>
          <NavLink to="/apps" onClick={closeMenu}>Apps</NavLink>
          <a
            href="mailto:aadarshraj4321@gmail.com"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: 4 }}
            onClick={closeMenu}
          >
            <Mail size={14} />
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
