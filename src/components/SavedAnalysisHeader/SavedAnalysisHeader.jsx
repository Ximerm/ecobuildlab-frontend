/**
 *
 * ---
 * EcoBuildLab
 *
 * Archivo: SavedAnalysisHeader.jsx
 *
 * ---
 * Encabezado de la página de análisis guardados.
 *
 * Muestra el nombre del usuario, la cantidad de análisis
 * guardados y las ubicaciones analizadas.
 *
 * ---
 *
 */

// ==============================
// Dependencias
// ==============================

import "./SavedAnalysisHeader.css";

import climateIllustration from "../../images/analysis-header.png";

// ==============================
// Componente
// ==============================

function SavedAnalysisHeader({ userName, analyses }) {
  // ==============================
  // Información de los análisis
  // ==============================

  const analysisCount = analyses.length;

  const locations = [
    ...new Set(analyses.map(({ analysis }) => analysis?.city).filter(Boolean)),
  ];

  const visibleLocations = locations.slice(0, 3);

  const remainingLocations = locations.length - visibleLocations.length;

  // ==============================
  // Render
  // ==============================

  return (
    <section className="saved-analysis-header">
      <div className="saved-analysis-header__content">
        <div className="saved-analysis-header__info">
          <h1 className="saved-analysis-header__title">
            {analysisCount === 0
              ? `${userName}, todavía no tienes análisis guardados`
              : `${userName}, tienes ${analysisCount} análisis climáticos guardados`}
          </h1>

          <p className="saved-analysis-header__description">
            {analysisCount === 0
              ? "Realiza un análisis climático para comenzar a construir tu biblioteca de ubicaciones."
              : "Consulta nuevamente las estrategias recomendadas para cada ubicación y reutiliza la información cuando continúes el diseño de tus proyectos."}
          </p>

          {analysisCount > 0 && (
            <div className="saved-analysis-header__locations">
              <span className="saved-analysis-header__locations-label">
                Ubicaciones analizadas
              </span>

              <div className="saved-analysis-header__locations-list">
                {visibleLocations.map((location) => (
                  <span
                    key={location}
                    className="saved-analysis-header__location"
                  >
                    {location}
                  </span>
                ))}

                {remainingLocations > 0 && (
                  <span className="saved-analysis-header__location">
                    &#43; {remainingLocations}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="saved-analysis-header__illustration">
          <img
            src={climateIllustration}
            alt="Climate ilustration"
            className="saved-analysis-header__image"
          />
        </div>
      </div>
    </section>
  );
}

export default SavedAnalysisHeader;
