import React, { useState, useRef } from "react";
import "../styles/form.css";

function Contact({ displayName, setDisplayName }) {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState({});
  const dialogRef = useRef(null);
  const [tempName, setTempName] = useState(displayName);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent!");
      setFormData({ name: "", message: "" });
    }
  };

  const openModal = () => {
    setTempName(displayName);
    dialogRef.current.showModal();
  };

  const saveDisplayName = () => {
    if (tempName.trim()) {
      setDisplayName(tempName.trim());
      dialogRef.current.close();
    }
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="checkout-form" noValidate>
        <label htmlFor="contact-name">Your Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <label htmlFor="contact-message">Message</label>
        <input
          id="contact-message"
          name="message"
          type="text"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <div className="error">{errors.message}</div>}

        <button type="submit">Send Message</button>
      </form>

      <hr />
      <h3>Edit Your Display Name</h3>
      <p>This is the name shown on the navbar (currently: <strong>{displayName}</strong>)</p>
      <button onClick={openModal}>Edit Display Name</button>

      <dialog ref={dialogRef}>
        <form method="dialog" className="checkout-form">
          <label htmlFor="edit-name">New Display Name</label>
          <input
            id="edit-name"
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <div>
            <button type="button" onClick={saveDisplayName}>Save</button>
            <button type="button" onClick={() => dialogRef.current.close()}>Cancel</button>
          </div>
        </form>
      </dialog>
    </section>
  );
}

export default Contact;