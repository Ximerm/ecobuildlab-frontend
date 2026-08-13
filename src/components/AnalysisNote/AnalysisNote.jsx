/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 *
 * Archivo: AnalysisNote.jsx
 *
 * -----------------------------------------------------------------------------
 * Nota metodológica que acompaña los resultados del análisis climático.
 *
 * Informa al usuario sobre el carácter orientativo de las recomendaciones
 * y la necesidad de corroborar los resultados con información específica
 * del sitio antes de tomar decisiones definitivas de diseño.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import "./AnalysisNote.css";

import infoIcon from "../../images/icons/info.png";

// ==============================
// Componente
// ==============================

function AnalysisNote() {
  return (
    <section className="analysis-note">
      <div className="analysis-note__content">
        <div className="analysis-note__icon-wrapper">
          <img
            src={infoIcon}
            alt="Information"
            aria-hidden="true"
            className="analysis-note__icon"
            y
          />
        </div>

        <div className="analysis-note__text-wrapper">
          <p className="analysis-note__text">
            Las recomendaciones presentadas son orientativas y deben
            complementarse con el análisis específico del proyecto, las
            condiciones particulares del sitio y la normativa vigente.
          </p>

          <p className="analysis-note__text">
            Los indicadores climáticos se calculan a partir de información
            histórica obtenida de fuentes de datos climáticos y constituyen una
            aproximación de las condiciones del lugar.
          </p>

          <p className="analysis-note__text">
            Se recomienda corroborar los resultados con información
            meteorológica local y, cuando sea necesario, con mediciones de campo
            antes de tomar decisiones definitivas de diseño.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AnalysisNote;
