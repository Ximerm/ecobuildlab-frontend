import { useState } from "react";

import "./SaveAnalysisSection.css";

import saveIcon from "../../images/icons/save.png";
import lockIcon from "../../images/icons/lock.png";
import successIcon from "../../images/icons/success-light.png";

import Notification from "../Notification/Notification";

function SaveAnalysisSection({ isLoggedIn, isSaved, onSaveAnalysis }) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleSave = () => {
    onSaveAnalysis();

    setIsNotificationOpen(true);

    setTimeout(() => {
      setIsNotificationOpen(false);
    }, 3000);
  };

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
          <Notification
            isOpen={isNotificationOpen}
            type="success"
            title="Análisis guardado"
            message="Disponible en Mis análisis."
          />

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
