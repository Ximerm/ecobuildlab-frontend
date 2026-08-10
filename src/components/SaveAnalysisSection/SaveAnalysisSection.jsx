/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 *
 * Archivo: SaveAnalysisSection.jsx
 *
 * -----------------------------------------------------------------------------
 * Sección que permite guardar un análisis climático.
 *
 * Gestiona:
 *
 * • El acceso al guardado según el estado de autenticación.
 * • El estado visual del análisis cuando ya fue guardado.
 * • La notificación de guardado exitoso.
 *
 * El resultado de la operación de guardado es gestionado
 * por el componente Results.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import "./SaveAnalysisSection.css";

import Notification from "../Notification/Notification";

import saveIcon from "../../images/icons/save.png";
import lockIcon from "../../images/icons/lock.png";
import successIcon from "../../images/icons/success-light.png";

// ==============================
// Componente
// ==============================

function SaveAnalysisSection({
  isLoggedIn,
  isSaved,
  onSaveAnalysis,
  notification,
}) {
  // ==============================
  // Guardar análisis
  // ==============================

  const handleSave = async () => {
    // No permite repetir la operación si el análisis
    // ya fue guardado.
    if (isSaved) {
      return;
    }

    // Results determina qué acción corresponde:
    // guardar el análisis si el usuario está autenticado
    // o abrir el modal de inicio de sesión si no lo está.
    await onSaveAnalysis();
  };
  // ==============================
  // Render
  // ==============================

  return (
    <section className="save-analysis">
      <div className="save-analysis__content">
        <div className="save-analysis__left">
          <div className="save-analysis__icon-wrapper">
            <img
              src={saveIcon}
              alt="Save"
              aria-hidden="true"
              className="save-analysis__icon"
            />
          </div>

          <div className="save-analysis__text">
            <h3 className="save-analysis__title">
              Accede nuevamente a este análisis
            </h3>

            <p className="save-analysis__description">
              Guarda los indicadores climáticos y las recomendaciones de diseño
              para consultarlos fácilmente cuando los necesites.
            </p>
          </div>
        </div>

        <div className="save-analysis__right">
          {/* ============================== */}
          {/* Notificación de guardado */}
          {/* ============================== */}
          {notification && (
            <Notification
              isOpen={true}
              type="success"
              title={notification.title}
              message={notification.message}
            />
          )}

          <button
            type="button"
            className={`save-analysis__button ${
              isSaved ? "save-analysis__button--saved" : ""
            }`}
            onClick={handleSave}
            disabled={isSaved}
          >
            {isSaved ? (
              <>
                <img
                  src={successIcon}
                  alt="Success"
                  aria-hidden="true"
                  className="save-analysis__button-icon"
                />

                <span>Análisis guardado</span>
              </>
            ) : (
              "Guardar análisis"
            )}
          </button>

          {!isLoggedIn && (
            <div className="save-analysis__login">
              <img
                src={lockIcon}
                alt="Lock"
                aria-hidden="true"
                className="save-analysis__lock"
              />

              <span>Inicia sesión para guardar este análisis.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SaveAnalysisSection;
