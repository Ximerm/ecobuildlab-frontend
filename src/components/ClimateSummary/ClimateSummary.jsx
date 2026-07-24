import "./ClimateSummary.css";

import IndicatorCardList from "../IndicatorCardList/IndicatorCardList";

import latitudeIcon from "../../images/icons/latitude.png";
import longitudeIcon from "../../images/icons/longitude.png";
import elevationIcon from "../../images/icons/elevation.png";

function ClimateSummary({ analysis }) {
  if (!analysis) {
    return null;
  }

  return (
    <section className="climate-summary">
      <div className="climate-summary__container">
        <div className="climate-summary__header">
          <div className="climate-summary__content">
            <h2 className="climate-summary__city">
              {analysis.location.name}, {analysis.location.country}
            </h2>

            <h3 className="climate-summary__title">Indicadores climáticos </h3>

            <p className="climate-summary__description">
              Basados en datos climáticos históricos de la ubicación
              seleccionada.
            </p>
          </div>

          <div className="climate-summary__location">
            <div className="climate-summary__item">
              <img
                src={latitudeIcon}
                alt="Latitude"
                className="climate-summary__icon"
              />

              <span>{analysis.location.latitude.toFixed(2)}°</span>
            </div>

            <div className="climate-summary__item">
              <img
                src={longitudeIcon}
                alt="Longitude"
                className="climate-summary__icon"
              />

              <span>{analysis.location.longitude.toFixed(2)}°</span>
            </div>

            <div className="climate-summary__item">
              <img
                src={elevationIcon}
                alt="Elevation"
                className="climate-summary__icon"
              />

              <span>{analysis.location.elevation} msnm</span>
            </div>
          </div>
        </div>

        <IndicatorCardList analysis={analysis} />

        <p className="climate-summary__source">
          Fuente de datos climáticos: Open-Meteo.
        </p>
      </div>
    </section>
  );
}

export default ClimateSummary;
