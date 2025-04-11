import React from "react";
import "../styles/done.css";
import Button from "../components/Button";

function Done({ setPage }) {
  return (
    <section className="done-container">
      <div className="progress-bar">
        <div className="step">1. Shop</div>
        <div className="arrow">→</div>
        <div className="step">2. Cart</div>
        <div className="arrow">→</div>
        <div className="step">3. Checkout</div>
        <div className="arrow">→</div>
        <div className="step active">4. Done</div>
      </div>

      <img 
        src="/assets/order-confirmed.jpeg" 
        alt="Order confirmed illustration" 
        className="done-image" 
      />

      <h2>Thank You!</h2>
      <p>Your order has been placed successfully.</p>
      <p>Please check your email for confirmation and next steps.</p>
      <p>Payment can be made upon pickup</p>
      <Button onClick={() => setPage("home")}>Back to Home</Button>
    </section>
  );
}

export default Done;