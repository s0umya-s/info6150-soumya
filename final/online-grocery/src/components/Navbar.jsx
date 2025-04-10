import React from "react";
import "../styles/navbar.css";

function Navbar({ setPage, displayName }) {
  return (
    <header className="navbar">
      <button onClick={() => setPage("home")} className="logo-button" aria-label="Go to home">
        <img
          src="/assets/logo.jpg"
          alt="Curbside Mart logo"
          className="navbar__logo"
        />
      </button>

      <nav className="navbar__nav">
        <button onClick={() => setPage("shop")}>Shop</button>
        <button onClick={() => setPage("cart")}>Cart</button>
        <button onClick={() => setPage("checkout")}>Checkout</button>
        <button onClick={() => setPage("contact")}>Contact Us</button>
      </nav>

      <div className="navbar__user">Hello, {displayName}</div>
    </header>
  );
}

export default Navbar;