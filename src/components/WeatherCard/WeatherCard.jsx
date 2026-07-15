import "./WeatherCard.css";

import climateClassificationIcon from "../../images/icons/climate-classification.png";

function WeatherCard() {
  return (
    <article className="weather-card">
      <div className="weather-card__header">
        <img
          src={climateClassificationIcon}
          alt="Clasificación climática"
          className="weather-card__icon"
        />

        <h3 className="weather-card__title">Clasificación climática</h3>
      </div>

      <div className="weather-card__content">
        <p className="weather-card__subtitle">Caldas-Lang</p>

        <p className="weather-card__value">Frío húmedo</p>
      </div>
    </article>
  );
}

export default WeatherCard;
