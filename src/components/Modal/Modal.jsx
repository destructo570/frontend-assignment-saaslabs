import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Button from "../ui/button/Button";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-container">
        {children}
        <div className="modal-actions">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
