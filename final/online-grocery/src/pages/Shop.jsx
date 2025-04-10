import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterSort from "../components/FilterSort";
import Button from "../components/Button";
import "../styles/shop.css";
import "../styles/progressbar.css"

function Shop({ cartItems, setCartItems, setPage }) {
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("name");

  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      increaseQty(product.id);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0)
    );
  };

  const filtered = category === "All"
    ? products
    : products.filter(p => p.category === category);

  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "price") return a.price - b.price;
    return a.name.localeCompare(b.name);
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  
  return (
    <section className="shop-container">
      <div className="progress-bar">
        <div className="step active">1. Shop</div>
        <div className="arrow">→</div>
        <div className="step">2. Cart</div>
        <div className="arrow">→</div>
        <div className="step">3. Checkout</div>
        <div className="arrow">→</div>
        <div className="step">4. Done</div>
      </div>

      <div className="step-header">
  <Button type="button" onClick={() => setPage("home")}>←</Button>
  <div className="step-header__text">
    <h2>Select items</h2>
    <h4>These items will be picked and packed for you, ready to be picked up at our curb</h4>
    </div>
  </div>

      <FilterSort
        category={category}
        setCategory={setCategory}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <div className="product-grid">
        {sorted.map(product => {
          const inCart = cartItems.find(item => item.id === product.id);
          const qty = inCart ? inCart.qty : 0;
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
              increaseQty={() => increaseQty(product.id)}
              decreaseQty={() => decreaseQty(product.id)}
              qty={qty}
            />
          );
        })}
      </div>

      <div className="hero__button">
        <h3>Total: ${total.toFixed(2)}</h3>
        <Button onClick={() => setPage("cart")}>
          Preview Cart
        </Button>
      </div>
    </section>
  );
}

export default Shop;