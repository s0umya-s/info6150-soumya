import React from "react";
import "../styles/cart.css";

function Cart({ cartItems, setPage }) {
  const updateQuantity = (productId, change) => {
    const updated = cartItems
      .map(item =>
        item.id === productId
          ? { ...item, qty: Math.max(1, item.qty + change) }
          : item
      );
    return updated;
  };

  const handleRemove = (productId) => {
    return cartItems.filter(item => item.id !== productId);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <section>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <button onClick={() => setPage("shop")}>Shop Now</button></p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} x {item.qty}</p>
                <div className="cart-controls">
                  <button onClick={() => setPage("cart", updateQuantity(item.id, -1))}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => setPage("cart", updateQuantity(item.id, 1))}>+</button>
                  <button onClick={() => setPage("cart", handleRemove(item.id))}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => setPage("checkout")}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;