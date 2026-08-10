/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: RegisterModal.jsx
 * -----------------------------------------------------------------------------
 * Modal de registro de nuevos usuarios.
 *
 * Gestiona la validación del formulario y el registro
 * del usuario mediante el backend.
 *
 * Después de crear correctamente la cuenta, muestra
 * una confirmación y permite continuar con el inicio
 * de sesión.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { useEffect, useRef, useState } from "react";

import "../AuthModal/AuthModal.css";

import Modal from "../Modal/Modal";

import useFormValidation from "../../hooks/useFormValidation";

import authService from "../../services/authService";

// ==============================
// Componente
// ==============================

function RegisterModal({ onClose, onOpenLogin }) {
  // ==============================
  // Referencias
  // ==============================
  const userNameInputRef = useRef(null);

  // ==============================
  // Estado del formulario
  // ==============================

  const { values, errors, isValid, handleChange } = useFormValidation({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ==============================
  // Estado del registro
  // ==============================

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);

  // ==============================
  // Validación de contraseñas
  // ==============================

  const passwordsMatch = values.password === values.confirmPassword;

  const isPasswordConfirmationValid =
    values.confirmPassword.length > 0 && passwordsMatch;

  // ==============================
  // Efectos
  // ==============================

  useEffect(() => {
    if (!isRegistrationSuccessful) {
      userNameInputRef.current?.focus();
    }
  }, [isRegistrationSuccessful]);

  // ==============================
  // Manejadores
  // ==============================

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Evita enviar el formulario si los campos
    // todavía no cumplen las validaciones.
    if (!isValid || !isPasswordConfirmationValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setServerError("");

    try {
      // El backend recibe únicamente los datos
      // necesarios para crear el usuario.
      await authService.register({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      // El registro fue completado correctamente.
      // Se muestra la confirmación antes de pasar
      // al formulario de inicio de sesión.
      setIsRegistrationSuccessful(true);
    } catch (error) {
      console.error("Error al registrar usuario:", error);

      setServerError(error.message || "No se pudo crear la cuenta.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==============================
  // Continuar con inicio de sesión
  // ==============================

  const handleContinueToLogin = () => {
    onOpenLogin();
  };

  // ==============================
  // Render
  // ==============================

  return (
    <Modal onClose={onClose} className="auth-modal">
      {isRegistrationSuccessful ? (
        // ==============================
        // Registro exitoso
        // ==============================
        <div className="auth-modal__success">
          <h2 className="auth-modal__title">¡Registro exitoso!</h2>

          <p className="auth-modal__success-message">
            Tu cuenta se creó correctamente.
          </p>

          <p className="auth-modal__success-message">
            Ya puedes iniciar sesión para guardar tus análisis climáticos.
          </p>

          <button
            type="button"
            className="auth-modal__button auth-modal__success-button"
            onClick={handleContinueToLogin}
          >
            Iniciar sesión
          </button>
        </div>
      ) : (
        <>
          {/* ============================== */}
          {/* Formulario de registro */}
          {/* ============================== */}

          <div className="auth-modal__content">
            <h2 className="auth-modal__title">Crear cuenta</h2>

            <form
              className="auth-modal__form"
              noValidate
              onSubmit={handleSubmit}
            >
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
                  minLength={3}
                  autoComplete="username"
                  value={values.name}
                  onChange={handleChange}
                />

                <span className="auth-modal__error">{errors.name}</span>
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
                  value={values.email}
                  onChange={handleChange}
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
                  className="auth-modal__input"
                  placeholder="Introduce tu contraseña"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={values.password}
                  onChange={handleChange}
                />

                <span className="auth-modal__error">{errors.password}</span>
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
                  value={values.confirmPassword}
                  onChange={handleChange}
                />

                <span className="auth-modal__error">
                  {values.confirmPassword && !passwordsMatch
                    ? "Las contraseñas no coinciden."
                    : errors.confirmPassword}
                </span>
              </div>

              {serverError && (
                <p className="auth-modal__server-error">{serverError}</p>
              )}

              <button
                type="submit"
                className="auth-modal__button"
                disabled={
                  !isValid || !isPasswordConfirmationValid || isSubmitting
                }
              >
                {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
              </button>
            </form>

            <p className="auth-modal__footer">
              ¿Ya tienes una cuenta?
              <button
                type="button"
                className="auth-modal__link"
                onClick={onOpenLogin}
                disabled={isSubmitting}
              >
                Iniciar sesión
              </button>
            </p>
          </div>
        </>
      )}
    </Modal>
  );
}

export default RegisterModal;
