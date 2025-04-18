import React from "react";
import "../styles/toastmodal.css";
import Button from "../components/Button";

function ToastModal({ show, message, onClose }) {
  if (!show) return null;

  return (
    <dialog open className="toast-modal" onClick={onClose}>
      <div className="toast-content">
        <p>{message}</p>
        <Button onClick={onClose}>OK</Button>
      </div>
    </dialog>
  );
}

export default ToastModal;