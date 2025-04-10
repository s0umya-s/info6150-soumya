import React, { useState } from "react";
import "../styles/form.css";
import "../styles/toastmodal.css";
import ButtonAdd from "../components/ButtonAdd";
import ToastModal from "../components/ToastModal";

function Contact({ setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (!formData.message.trim()) newErrors.message = "Message field cannot be left blank.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="checkout-container">
      <h2>Contact Us</h2>

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
          />
          {errors.name && <div className="error">{errors.name}</div>}
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
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <input
            id="message"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "invalid" : ""}
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>

        <div className="checkout-buttons">
          <ButtonAdd type="submit">Send Message</ButtonAdd>
        </div>
      </form>

      <ToastModal
        show={showToast}
        message="Your message has been sent! We'll be in touch shortly."
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}

export default Contact;