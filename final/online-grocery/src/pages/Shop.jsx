import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterSort from "../components/FilterSort";
import "../styles/shop.css";

function Shop({ cartItems, setCartItems }) {
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("name");

  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const filtered = category === "All"
    ? products
    : products.filter(p => p.category === category);

  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "price") return a.price - b.price;
    return a.name.localeCompare(b.name);
  });

  return (
    <section>
      <h2>Shop for Groceries</h2>
      <FilterSort
        category={category}
        setCategory={setCategory}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="product-grid">
        {sorted.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default Shop;