import React from "react";
import "../styles/productcard.css";

function ProductCard({ product, addToCart, increaseQty, decreaseQty, qty }) {
  return (
    <div className="product-card">
      <img 
        src={`assets/${product.image}`} alt={product.name}
        className="product-card__image" 
      />
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__price">${product.price.toFixed(2)}</p>

      {qty === 0 ? (
        <button className="btn-regular" onClick={addToCart}>
          Add to Cart
        </button>
      ) : (
        <div className="product-card__qty-controls">
          <button onClick={decreaseQty} aria-label={`Decrease ${product.name}`}>−</button>
          <span>{qty}</span>
          <button onClick={increaseQty} aria-label={`Increase ${product.name}`}>+</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;

