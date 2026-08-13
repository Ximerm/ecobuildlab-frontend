/**
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: LoginModal.jsx
 * -----------------------------------------------------------------------------
 * Modal de inicio de sesión.
 *
 * Gestiona la validación del formulario y la
 * autenticación del usuario mediante el contexto.
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { useContext, useEffect, useRef, useState } from "react";

import "../AuthModal/AuthModal.css";

import Modal from "../Modal/Modal";

import useFormValidation from "../../hooks/useFormValidation";

import CurrentUserContext from "../../contexts/CurrentUserContext";

// ==============================
// Componente
// ==============================

function LoginModal({ onClose, onOpenRegister }) {
  // ==============================
  // Referencias
  // ==============================

  const emailInputRef = useRef(null);

  // ==============================
  // Contexto de autenticación
  // ==============================

  const { login } = useContext(CurrentUserContext);

  // ==============================
  // Estado del formulario
  // ==============================

  const { values, errors, isValid, handleChange } = useFormValidation({
    email: "",
    password: "",
  });

  // ==============================
  // Estado de autenticación
  // ==============================

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  // ==============================
  // Efectos
  // ==============================

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  // ==============================
  // Manejadores
  // ==============================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setServerError("");

    try {
      await login({
        email: values.email,
        password: values.password,
      });

      onClose();
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      setServerError(error.message || "No se pudo iniciar sesión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==============================
  // Render
  // ==============================

  return (
    <Modal onClose={onClose} className="auth-modal">
      <div className="auth-modal__content">
        <h2 className="auth-modal__title">Iniciar sesión</h2>

        <form className="auth-modal__form" noValidate onSubmit={handleSubmit}>
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
              value={values.email}
              onChange={handleChange}
              required
            />

            <span className="auth-modal__error">{errors.email}</span>
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
              value={values.password}
              onChange={handleChange}
              required
            />

            <span className="auth-modal__error">{errors.password}</span>
          </div>

          {serverError && (
            <p className="auth-modal__server-error">{serverError}</p>
          )}

          <button
            type="submit"
            className="auth-modal__button"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>

        <p className="auth-modal__footer">
          ¿No tienes una cuenta?
          <button
            type="button"
            className="auth-modal__link"
            onClick={onOpenRegister}
            disabled={isSubmitting}
          >
            Crear cuenta
          </button>
        </p>
      </div>
    </Modal>
  );
}

export default LoginModal;
