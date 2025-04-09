import React from "react";
import "../styles/cart.css";
import Button from "../components/Button";

function Cart({ cartItems, setCartItems, setPage }) {
  const updateQuantity = (productId, change) => {
    const updated = cartItems.map(item =>
      item.id === productId
        ? { ...item, qty: Math.max(1, item.qty + change) }
        : item
    );
    setCartItems(updated);
  };

  const handleRemove = (productId) => {
    const updated = cartItems.filter(item => item.id !== productId);
    setCartItems(updated);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <section className="cart-container">
      <div className="progress-bar">
        <div className="step">1. Shop</div>
        <div className="step active">2. Cart</div>
        <div className="step">3. Checkout</div>
        <div className="step">4. Done</div>
      </div>

      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Button onClick={() => setPage("shop")}>Shop Now</Button></p>
      ) : (
        <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={`/assets/${item.image}`} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} x {item.qty}</p>
                  <div className="cart-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}

          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <Button onClick={() => setPage("checkout")}>Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;