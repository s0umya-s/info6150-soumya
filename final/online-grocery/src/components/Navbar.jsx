import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar({ setPage, displayName }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div
        className="navbar__brand"
        onClick={() => handleNavClick("home")}
        tabIndex={0}
        role="button"
        aria-label="Go to Home"
        onKeyDown={(e) => e.key === "Enter" && handleNavClick("home")}
      >
        <img
          src="/assets/logo.jpg"
          alt="Curbside Mart logo"
          className="navbar__logo"
        />
        Curbside Mart
      </div>

      <button
        className="navbar__hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        ☰
      </button>

      <nav className={`navbar__nav ${isOpen ? "open" : ""}`}>
        <button onClick={() => handleNavClick("shop")}>Shop</button>
        <button onClick={() => handleNavClick("cart")}>Cart</button>
        <button onClick={() => handleNavClick("checkout")}>Checkout</button>
        <button onClick={() => handleNavClick("contact")}>Contact Us</button>
      </nav>

      <div className="navbar__user">Hello, {displayName}</div>
    </header>
  );
}

export default Navbar;