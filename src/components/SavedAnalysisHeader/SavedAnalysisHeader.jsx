import "./SavedAnalysisHeader.css";

import climateIllustration from "../../images/analysis-header.png";

function SavedAnalysisHeader({ userName, analyses }) {
  const analysisCount = analyses.length;
  const locations = [
    ...new Set(analyses.map(({ analysis }) => analysis?.city).filter(Boolean)),
  ];
  const visibleLocations = locations.slice(0, 3);
  const remainingLocations = locations.length - visibleLocations.length;

  return (
    <section className="saved-analysis-header">
      <div className="saved-analysis-header__content">
        <div className="saved-analysis-header__info">
          <h1 className="saved-analysis-header__title">
            <strong>{userName}</strong>, tienes <strong>{analysisCount}</strong>{" "}
            análisis climáticos guardados
          </h1>

          <p className="saved-analysis-header__description">
            Consulta nuevamente las estrategias recomendadas para cada ubicación
            y reutiliza la información cuando continúes el diseño de tus
            proyectos.
          </p>

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
