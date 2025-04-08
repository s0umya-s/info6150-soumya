import React from "react";
import "../styles/toast.css";

function ToastModal({ show, message, onClose }) {
  return (
    <dialog open={show} className="toast-modal" onClick={onClose}>
      <div className="toast-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </dialog>
  );
}

export default ToastModal;