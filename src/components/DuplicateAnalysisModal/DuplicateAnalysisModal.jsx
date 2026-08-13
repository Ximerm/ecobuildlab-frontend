/**
 *
 * ---
 * EcoBuildLab
 * Archivo: DuplicateAnalysisModal.jsx
 *
 * ---
 * Modal mostrado cuando el usuario intenta guardar
 * un análisis de una ubicación que ya tiene guardada.
 *
 * Permite cancelar la operación o reemplazar
 * el análisis existente con los nuevos datos.
 *
 * ---
 *
 */

// ==============================
// Dependencias
// ==============================

import { useEffect } from "react";

import "./DuplicateAnalysisModal.css";

import closeIcon from "../../images/icons/close.svg";

// ==============================
// Componente
// ==============================

function DuplicateAnalysisModal({
  city,
  country,
  isReplacing,
  onClose,
  onReplace,
}) {
  // ==============================
  // Cierre con la tecla Escape
  // ==============================

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && !isReplacing) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose, isReplacing]);

  // ==============================
  // Render
  // ==============================

  return (
    <div className="duplicate-analysis-modal">
      <div className="duplicate-analysis-modal__overlay">
        <div className="duplicate-analysis-modal__container">
          {/* Botón para cerrar el modal */}
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            disabled={isReplacing}
            aria-label="Cerrar"
          >
            <img
              src={closeIcon}
              alt=""
              aria-hidden="true"
              className="modal__close-icon"
            />
          </button>

          {/* Encabezado */}
          <div className="duplicate-analysis-modal__header">
            <h2 className="duplicate-analysis-modal__title">
              Este análisis ya está guardado
            </h2>
          </div>

          {/* Contenido */}
          <div className="duplicate-analysis-modal__content">
            <p className="duplicate-analysis-modal__message">
              Ya tienes un análisis guardado para{" "}
              <strong>
                {city}, {country}
              </strong>
              .
            </p>

            <p className="duplicate-analysis-modal__message">
              Puedes conservar el análisis actual o reemplazarlo con la
              información del nuevo análisis.
            </p>
          </div>

          {/* Acciones */}
          <div className="duplicate-analysis-modal__actions">
            <button
              type="button"
              className="duplicate-analysis-modal__button duplicate-analysis-modal__button--cancel"
              onClick={onClose}
              disabled={isReplacing}
            >
              Cancelar
            </button>

            <button
              type="button"
              className="duplicate-analysis-modal__button duplicate-analysis-modal__button--replace"
              onClick={onReplace}
              disabled={isReplacing}
            >
              {isReplacing ? "Reemplazando..." : "Reemplazar análisis"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DuplicateAnalysisModal;
