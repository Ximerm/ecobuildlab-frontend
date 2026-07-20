import "../AuthModal/AuthModal.css";

import Modal from "../Modal/Modal";

import { useEffect, useRef } from "react";

function LoginModal({ onClose, onOpenRegister }) {
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);
  return (
    <Modal onClose={onClose} className="auth-modal">
      <div className="auth-modal__content">
        <h2 className="auth-modal__title">Iniciar sesión</h2>

        <form
          className="auth-modal__form"
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="auth-modal__field">
            <label htmlFor="email" className="auth-modal__label">
              Correo electrónico
            </label>

            <input
              ref={emailInputRef}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="auth-modal__input"
              placeholder="correo@ejemplo.com"
              required
            />
            <span className="auth-modal__error"></span>
          </div>

          <div className="auth-modal__field">
            <label htmlFor="password" className="auth-modal__label">
              Contraseña
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="auth-modal__input"
              placeholder="Introduce tu contraseña"
              required
            />
            <span className="auth-modal__error"></span>
          </div>

          <button type="submit" className="auth-modal__button">
            Iniciar sesión
          </button>
        </form>

        <p className="auth-modal__footer">
          ¿No tienes una cuenta?
          <button
            type="button"
            className="auth-modal__link"
            onClick={onOpenRegister}
          >
            Crear cuenta
          </button>
        </p>
      </div>
    </Modal>
  );
}

export default LoginModal;
