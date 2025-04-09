import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import "./styles/responsive.css";
import "./styles/layout.css";

function App() {
  const [page, setPage] = useState("home");
  const [cartItems, setCartItems] = useState([]);
  const [displayName, setDisplayName] = useState("Northeastern University");

  const renderPage = () => {
    switch (page) {
      case "shop":
        return <Shop setPage={setPage} cartItems={cartItems} setCartItems={setCartItems} />;
      case "cart":
        return <Cart cartItems={cartItems} setPage={setPage} />;
      case "checkout":
        return <Checkout cartItems={cartItems} />;
      case "contact":
        return <Contact displayName={displayName} setDisplayName={setDisplayName} />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <>
      <a href="#main" className="skiplink">Skip to content</a>
      <Navbar setPage={setPage} displayName={displayName} />
      <main id="main" tabIndex="-1">{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;