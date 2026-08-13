/**
 *
  ---
- EcoBuildLab
- Archivo: DeleteAnalysisModal.jsx
-
  ---
- Modal de confirmación para eliminar un análisis bioclimático
- guardado por el usuario.
-
- Permite cancelar la operación o confirmar la eliminación.
-
  ---
*
*/

// ==============================
// Dependencias
// ==============================

import Modal from "../Modal/Modal";

import "./DeleteAnalysisModal.css";

// ==============================
// Componente
// ==============================

function DeleteAnalysisModal({ city, country, isDeleting, onClose, onDelete }) {
  // ==============================
  // Render
  // ==============================

  return (
    <Modal onClose={onClose} className="delete-analysis-modal">
      <div className="delete-analysis-modal__header">
        <h2 className="delete-analysis-modal__title">
          ¿Eliminar este análisis?
        </h2>
      </div>

      <div className="delete-analysis-modal__content">
        <p className="delete-analysis-modal__message">
          Estás a punto de eliminar el análisis de{" "}
          <strong>
            {city}, {country}
          </strong>
          .
        </p>

        <p className="delete-analysis-modal__message">
          Esta acción no se puede deshacer.
        </p>
      </div>

      <div className="delete-analysis-modal__actions">
        <button
          type="button"
          className="delete-analysis-modal__button delete-analysis-modal__button--cancel"
          onClick={onClose}
          disabled={isDeleting}
        >
          Cancelar
        </button>

        <button
          type="button"
          className="delete-analysis-modal__button delete-analysis-modal__button--delete"
          onClick={onDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Eliminando..." : "Eliminar análisis"}
        </button>
      </div>
    </Modal>
  );
}

export default DeleteAnalysisModal;
