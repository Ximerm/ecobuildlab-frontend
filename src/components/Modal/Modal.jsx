import { useEffect } from "react";
import "./Modal.css";

import closeIcon from "../../images/icons/close.svg";

function Modal({ children, onClose, className = "" }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal" onClick={onClose}>
      <div
        className={`modal__container ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          <img
            src={closeIcon}
            alt="Close"
            aria-hidden="true"
            className="modal__close-icon"
          />
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
