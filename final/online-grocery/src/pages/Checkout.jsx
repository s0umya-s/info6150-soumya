import React, { useState } from "react";
import "../styles/form.css";
import "../styles/toastmodal.css";
import "../styles/progressbar.css"
import Button from "../components/Button";

function Checkout({ cartItems, setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shipping: "",
    billing: "",
    deliveryType: "curbside",
    billingSame: true,
  });

  const [errors, setErrors] = useState({});

  const [showToast, setShowToast] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "billingSame" && checked) {
        updated.billing = prev.shipping;
      }

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (!formData.shipping.trim()) newErrors.shipping = "Shipping address is required.";
    if (!formData.billingSame && !formData.billing.trim()) newErrors.billing = "Billing address is required.";

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
      <div className="step-header__text"></div>
      <h2>Checkout</h2>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <button onClick={() => setPage("shop")}>Go to Shop</button></p>
      ) : (
        <>
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
              <label htmlFor="shipping">Shipping Address*</label>
              <input
                id="shipping"
                name="shipping"
                type="text"
                value={formData.shipping}
                onChange={handleChange}
                className={errors.shipping ? "invalid" : ""}
                aria-describedby={errors.shipping ? "shipping-error" : undefined}
              />
              {errors.shipping && <div className="error" id="shipping-error">{errors.shipping}</div>}
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

            <label>
              <input
                type="checkbox"
                name="billingSame"
                checked={formData.billingSame}
                onChange={handleChange}
              />
              Billing address same as shipping
            </label>

            {!formData.billingSame && (
              <div className="form-group">
                <label htmlFor="billing">Billing Address*</label>
                <input
                  id="billing"
                  name="billing"
                  type="text"
                  value={formData.billing}
                  onChange={handleChange}
                  className={errors.billing ? "invalid" : ""}
                  aria-describedby={errors.billing ? "billing-error" : undefined}
                />
                {errors.billing && <div className="error" id="billing-error">{errors.billing}</div>}
              </div>
            )}

            <div className="cart-total">
              <h3>Total: ${total.toFixed(2)}</h3>
              <Button onClick={() => setPage("done")}>Place your order</Button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}

export default Checkout;