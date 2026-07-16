import "./WeatherCardList.css";

import WeatherCard from "../WeatherCard/WeatherCard";

import climateClassificationIcon from "../../images/icons/climate-classification.png";
import temperatureIcon from "../../images/icons/temperature.png";
import humidityIcon from "../../images/icons/humidity.png";
import windIcon from "../../images/icons/wind.png";
import precipitationIcon from "../../images/icons/precipitation.png";
import radiationIcon from "../../images/icons/radiation.png";

function WeatherCardList() {
  return (
    <section className="weather-card-list">
      <WeatherCard
        icon={climateClassificationIcon}
        title="Clasificación climática"
      >
        <p className="weather-card__subtitle">Caldas-Lang</p>

        <p className="weather-card__value">Frío húmedo</p>
      </WeatherCard>

      <WeatherCard icon={temperatureIcon} title="Temperatura (°C)">
        <div className="weather-card__stats">
          <div className="weather-card__stat">
            <span className="weather-card__label">Máxima</span>
            <span className="weather-card__number">18.5</span>
          </div>

          <div className="weather-card__stat">
            <span className="weather-card__label">Media</span>
            <span className="weather-card__number">14.2</span>
          </div>

          <div className="weather-card__stat">
            <span className="weather-card__label">Mínima</span>
            <span className="weather-card__number">9.8</span>
          </div>
        </div>
      </WeatherCard>

      <WeatherCard icon={humidityIcon} title="Humedad relativa(%)">
        <div className="weather-card__stats">
          <div className="weather-card__stat">
            <span className="weather-card__label">Máxima</span>
            <span className="weather-card__number">75</span>
          </div>

          <div className="weather-card__stat">
            <span className="weather-card__label">Media</span>
            <span className="weather-card__number">60</span>
          </div>

          <div className="weather-card__stat">
            <span className="weather-card__label">Mínima</span>
            <span className="weather-card__number">20</span>
          </div>
        </div>
      </WeatherCard>

      <WeatherCard icon={windIcon} title="Viento">
        <div className="weather-card__stats">
          <div className="weather-card__stat">
            <span className="weather-card__label">Velocidad media</span>
            <span className="weather-card__number">2.5 m/s</span>
          </div>

          <div className="weather-card__stat">
            <span className="weather-card__label">Dir. predominante</span>
            <span className="weather-card__number">NE</span>
          </div>
        </div>
      </WeatherCard>

      <WeatherCard icon={precipitationIcon} title="Precipitación (mm)">
        <p className="weather-card__subtitle">Anual</p>

        <p className="weather-card__value">980 mm</p>
      </WeatherCard>

      <WeatherCard icon={radiationIcon} title="Radiación solar">
        <p className="weather-card__subtitle">Radiación global media</p>

        <p className="weather-card__value">4.9 kWh/m²·día</p>
      </WeatherCard>
    </section>
  );
}

export default WeatherCardList;
