import "./RegisterModal.css";

import Modal from "../Modal/Modal";

import { useEffect, useRef } from "react";

function RegisterModal({ onClose, onOpenLogin }) {
  const userNameInputRef = useRef(null);

  useEffect(() => {
    userNameInputRef.current?.focus();
  }, []);

  return (
    <Modal onClose={onClose} className="register-modal">
      <div className="register-modal__content">
        <h2 className="register-modal__title">Crear cuenta</h2>

        <form
          className="register-modal__form"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="register-modal__field">
            <label htmlFor="name" className="register-modal__label">
              Nombre de usuario
            </label>

            <input
              ref={userNameInputRef}
              id="name"
              type="text"
              className="register-modal__input"
              placeholder="Introduce tu nombre de usuario"
              required
            />

            <span className="register-modal__error"></span>
          </div>

          <div className="register-modal__field">
            <label htmlFor="email" className="register-modal__label">
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              className="register-modal__input"
              placeholder="correo@ejemplo.com"
              required
            />

            <span className="register-modal__error"></span>
          </div>

          <div className="register-modal__field">
            <label htmlFor="password" className="register-modal__label">
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              className="register-modal__input"
              placeholder="Introduce tu contraseña"
              required
            />

            <span className="register-modal__error"></span>
          </div>

          <div className="register-modal__field">
            <label htmlFor="confirmPassword" className="register-modal__label">
              Confirmar contraseña
            </label>

            <input
              id="confirmPassword"
              type="password"
              className="register-modal__input"
              placeholder="Repite tu contraseña"
              required
            />

            <span className="register-modal__error"></span>
          </div>

          <button type="submit" className="register-modal__button">
            Crear cuenta
          </button>
        </form>

        <p className="register-modal__footer">
          ¿Ya tienes una cuenta?
          <button
            type="button"
            className="register-modal__link"
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
