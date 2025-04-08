import React, { useState } from "react";
import "../styles/form.css";
import ToastModal from "../components/ToastModal";
import "../styles/toast.css";

function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shipping: "",
    billing: "",
    deliveryType: "curbside",
    billingSame: true
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "billingSame" && checked ? { billing: prev.shipping } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email required.";
    if (!formData.shipping.trim()) newErrors.shipping = "Shipping address required.";
    if (!formData.billing.trim() && !formData.billingSame) newErrors.billing = "Billing address required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowToast(true);
    }
  };

  return (
    <section>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items before checking out.</p>
      ) : (
        <>
          <form className="checkout-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              aria-describedby="name-error"
            />
            {errors.name && <div id="name-error" className="error">{errors.name}</div>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              aria-describedby="email-error"
            />
            {errors.email && <div id="email-error" className="error">{errors.email}</div>}

            <label htmlFor="shipping">Shipping Address</label>
            <input
              id="shipping"
              name="shipping"
              type="text"
              value={formData.shipping}
              onChange={handleChange}
              aria-describedby="shipping-error"
            />
            {errors.shipping && <div id="shipping-error" className="error">{errors.shipping}</div>}

            <fieldset>
              <legend>Delivery Option</legend>
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
                />
                Home Delivery
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
              <>
                <label htmlFor="billing">Billing Address</label>
                <input
                  id="billing"
                  name="billing"
                  type="text"
                  value={formData.billing}
                  onChange={handleChange}
                  aria-describedby="billing-error"
                />
                {errors.billing && <div id="billing-error" className="error">{errors.billing}</div>}
              </>
            )}

            <button type="submit">Place Order</button>
          </form>

          <ToastModal
            show={showToast}
            message="Order submitted!"
            onClose={() => setShowToast(false)}
          />
        </>
      )}
    </section>
  );
}

export default Checkout;