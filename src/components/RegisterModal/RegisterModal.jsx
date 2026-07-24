import "../AuthModal/AuthModal.css";

import Modal from "../Modal/Modal";

import { useEffect, useRef } from "react";

function RegisterModal({ onClose, onOpenLogin }) {
  const userNameInputRef = useRef(null);

  useEffect(() => {
    userNameInputRef.current?.focus();
  }, []);

  return (
    <Modal onClose={onClose} className="auth-modal">
      <div className="auth-modal__content">
        <h2 className="auth-modal__title">Crear cuenta</h2>

        <form className="auth-modal__form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-modal__field">
            <label htmlFor="name" className="auth-modal__label">
              Nombre de usuario
            </label>

            <input
              ref={userNameInputRef}
              id="name"
              name="name"
              type="text"
              className="auth-modal__input"
              placeholder="Introduce tu nombre de usuario"
              required
              autoComplete="username"
            />

            <span className="auth-modal__error"></span>
          </div>

          <div className="auth-modal__field">
            <label htmlFor="email" className="auth-modal__label">
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              className="auth-modal__input"
              placeholder="correo@ejemplo.com"
              required
              autoComplete="email"
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
              className="auth-modal__input"
              placeholder="Introduce tu contraseña"
              required
              autoComplete="new-password"
            />

            <span className="auth-modal__error"></span>
          </div>

          <div className="auth-modal__field">
            <label htmlFor="confirmPassword" className="auth-modal__label">
              Confirmar contraseña
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="auth-modal__input"
              placeholder="Repite tu contraseña"
              required
              autoComplete="new-password"
            />

            <span className="auth-modal__error"></span>
          </div>

          <button type="submit" className="auth-modal__button">
            Crear cuenta
          </button>
        </form>

        <p className="auth-modal__footer">
          ¿Ya tienes una cuenta?
          <button
            type="button"
            className="auth-modal__link"
            onClick={onOpenLogin}
          >
            Iniciar sesión
          </button>
        </p>
      </div>
    </Modal>
  );
}

export default RegisterModal;
