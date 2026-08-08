/**
 * --------------------------------------------------
 * EcoBuildLab
 * Archivo: useFormValidation.js
 * --------------------------------------------------
 * Hook personalizado para la gestión y validación
 * de formularios.
 *
 * Centraliza el manejo del estado de los campos,
 * los mensajes de error y la validación utilizando
 * la API nativa de formularios HTML5.
 *
 * Este hook puede reutilizarse en cualquier
 * formulario de la aplicación.
 * --------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { useCallback, useState } from "react";

// ==============================
// Hook
// ==============================

function useFormValidation(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [isValid, setIsValid] = useState(false);

  /**
   * Actualiza el estado del formulario y valida
   * el campo modificado.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const handleChange = useCallback((event) => {
    const { name, value, validationMessage, form } = event.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: validationMessage,
    }));

    setIsValid(form.checkValidity());
  }, []);

  /**
   * Restablece el estado inicial del formulario.
   *
   * @param {Object} newValues
   */
  const resetForm = useCallback((newValues = {}) => {
    setValues(newValues);
    setErrors({});
    setIsValid(false);
  }, []);

  /**
   * Actualiza los valores del formulario.
   *
   * Permite inicializar o reemplazar los valores
   * sin exponer directamente el estado interno
   * del hook.
   *
   * @param {Object} newValues
   */
  const setFormValues = useCallback((newValues) => {
    setValues(newValues);
  }, []);

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setFormValues,
  };
}

// ==============================
// Exportaciones
// ==============================

export default useFormValidation;
