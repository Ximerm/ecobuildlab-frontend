import "./SaveAnalysis.css";

import saveIcon from "../../images/icons/save.png";
import lockIcon from "../../images/icons/lock.png";

function SaveAnalysis() {
  return (
    <section className="save-analysis">
      <div className="save-analysis__content">
        <div className="save-analysis__left">
          <div className="save-analysis__icon-wrapper">
            <img
              src={saveIcon}
              alt=""
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
              para consultarlos cuando lo necesites.
            </p>
          </div>
        </div>

        <div className="save-analysis__right">
          <button type="button" className="save-analysis__button">
            Guardar análisis
          </button>

          <div className="save-analysis__login">
            <img
              src={lockIcon}
              alt=""
              aria-hidden="true"
              className="save-analysis__lock"
            />

            <span>Inicia sesión para guardar este análisis.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SaveAnalysis;
