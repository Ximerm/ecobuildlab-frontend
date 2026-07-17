import "./LoginModal.css";

import Modal from "../Modal/Modal";

import { useEffect, useRef } from "react";

function LoginModal({ onClose, onOpenRegister }) {
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);
  return (
    <Modal onClose={onClose} className="login-modal">
      <div className="login-modal__content">
        <h2 className="login-modal__title">Iniciar sesión</h2>

        <form
          className="login-modal__form"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="login-modal__field">
            <label htmlFor="email" className="login-modal__label">
              Correo electrónico
            </label>

            <input
              ref={emailInputRef}
              id="email"
              type="email"
              className="login-modal__input"
              placeholder="correo@ejemplo.com"
              required
            />
            <span className="login-modal__error"></span>
          </div>

          <div className="login-modal__field">
            <label htmlFor="password" className="login-modal__label">
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              className="login-modal__input"
              placeholder="Introduce tu contraseña"
              required
            />
            <span className="login-modal__error"></span>
          </div>

          <button type="button" className="login-modal__button">
            Iniciar sesión
          </button>
        </form>

        <p className="login-modal__footer">
          ¿No tienes una cuenta?
          <button
            type="button"
            className="login-modal__link"
            onClick={onOpenRegister}
          >
            <span>Crear cuenta</span>
          </button>
        </p>
      </div>
    </Modal>
  );
}

export default LoginModal;
