import React, { useState } from "react";
import "../styles/form.css";
import "../styles/toastmodal.css";
import "../styles/progressbar.css";
import Button from "../components/Button";

function Checkout({ cartItems, setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickupHour: "",
    pickupPeriod: "",
    deliveryType: "curbside",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";

    if (!formData.pickupHour.trim()) {
      newErrors.pickupHour = "Pickup hour is required.";
    } else {
      const hour = Number(formData.pickupHour);
      if (isNaN(hour) || hour < 1 || hour > 12) {
        newErrors.pickupHour = "Hour must be a number between 1 and 12.";
      }
    }

    if (!formData.pickupPeriod.trim()) newErrors.pickupPeriod = "Please select AM or PM.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setPage("done");
      }, 2000);
    }
  };

  return (
    <section className="shop-container">
      <div className="progress-bar">
        <div className="step">1. Shop</div>
        <div className="arrow">→</div>
        <div className="step">2. Cart</div>
        <div className="arrow">→</div>
        <div className="step active">3. Checkout</div>
        <div className="arrow">→</div>
        <div className="step">4. Done</div>
      </div>

      <div className="step-header">
        <Button type="button" onClick={() => setPage("home")}>←</Button>
        <div className="step-header__text">
          <h2>Checkout</h2>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Button onClick={() => setPage("shop")}>Go to Shop</Button></p>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "invalid" : ""}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <div className="error" id="name-error">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "invalid" : ""}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <div className="error" id="email-error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="pickupHour">Estimated Pickup Hour (1–12)*</label>
            <input
              id="pickupHour"
              name="pickupHour"
              type="number"
              min="1"
              max="12"
              placeholder="Enter hour (e.g., 4)"
              value={formData.pickupHour}
              onChange={handleChange}
              className={errors.pickupHour ? "invalid" : ""}
              aria-describedby={errors.pickupHour ? "pickupHour-error" : undefined}
            />
            {errors.pickupHour && <div className="error" id="pickupHour-error">{errors.pickupHour}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="pickupPeriod">AM/PM*</label>
            <select
              id="pickupPeriod"
              name="pickupPeriod"
              value={formData.pickupPeriod}
              onChange={handleChange}
              className={errors.pickupPeriod ? "invalid" : ""}
              aria-describedby={errors.pickupPeriod ? "pickupPeriod-error" : undefined}
            >
              <option value="">Select</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
            {errors.pickupPeriod && <div className="error" id="pickupPeriod-error">{errors.pickupPeriod}</div>}
          </div>

          <fieldset>
            <legend>Delivery Option*</legend>
            <label>
              <input
                type="radio"
                name="deliveryType"
                value="curbside"
                checked={formData.deliveryType === "curbside"}
                onChange={handleChange}
              />
              Curbside Pickup
            </label>
            <label>
              <input
                type="radio"
                name="deliveryType"
                value="home"
                checked={formData.deliveryType === "home"}
                onChange={handleChange}
                disabled
              />
              Home Delivery (Not available)
            </label>
          </fieldset>

          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <Button type="submit">Place your order</Button>
          </div>
        </form>
      )}
    </section>
  );
}

export default Checkout;