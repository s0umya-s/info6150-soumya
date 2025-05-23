import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Done from "./pages/Done";

import "./styles/responsive.css";
import "./styles/layout.css";

function App() {
  const [page, setPage] = useState("home");
  const [cartItems, setCartItems] = useState([]);
  const [displayName, setDisplayName] = useState("Northeastern University");

  const renderPage = () => {
    switch (page) {
      case "shop":
        return (
          <Shop
            setPage={setPage}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        );
      case "cart":
        return (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            setPage={setPage}
          />
        );
      case "checkout":
        return (
          <Checkout
            cartItems={cartItems}
            setPage={setPage}
          />
        );
      case "contact":
        return (
          <Contact
            setPage={setPage}
            displayName={displayName}
            setDisplayName={setDisplayName}
          />
        );
      case "done":
        return <Done setPage={setPage} />;
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