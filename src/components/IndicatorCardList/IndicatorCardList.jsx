import "./IndicatorCardList.css";

import IndicatorCard from "../IndicatorCard/IndicatorCard";

import climateClassificationIcon from "../../images/indicators/climate-classification.png";
import temperatureIcon from "../../images/indicators/temperature.png";
import humidityIcon from "../../images/indicators/humidity.png";
import windIcon from "../../images/indicators/wind.png";
import precipitationIcon from "../../images/indicators/precipitation.png";
import radiationIcon from "../../images/indicators/radiation.png";

function IndicatorCardList({ analysis }) {
  if (!analysis) {
    return null;
  }

  return (
    <section className="indicator-card-list">
      <IndicatorCard
        icon={climateClassificationIcon}
        title="Clasificación climática"
      >
        <p className="indicator-card__subtitle">
          {analysis.classification.method.name}
        </p>

        <p className="indicator-card__value">
          {analysis.classification.climate.name}
        </p>
      </IndicatorCard>

      <IndicatorCard icon={temperatureIcon} title="Temperatura (°C)">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Máxima</span>
            <span className="indicator-card__number">
              {analysis.climateData.temperature.max}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Media</span>
            <span className="indicator-card__number">
              {analysis.climateData.temperature.average}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Mínima</span>
            <span className="indicator-card__number">
              {analysis.climateData.temperature.min}
            </span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={humidityIcon} title="Humedad relativa (%)">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Máxima</span>
            <span className="indicator-card__number">
              {analysis.climateData.humidity.max}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Media</span>
            <span className="indicator-card__number">
              {analysis.climateData.humidity.average}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Mínima</span>
            <span className="indicator-card__number">
              {analysis.climateData.humidity.min}
            </span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={windIcon} title="Viento">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Velocidad</span>
            <span className="indicator-card__number">
              {analysis.climateData.wind.average}{" "}
              {analysis.climateData.wind.unit}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Dirección</span>
            <span className="indicator-card__number">
              {analysis.climateData.wind.direction}
            </span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={precipitationIcon} title="Precipitación (mm)">
        <p className="indicator-card__subtitle">Anual</p>

        <p className="indicator-card__value">
          {analysis.climateData.precipitation.annual}{" "}
          {analysis.climateData.precipitation.unit}
        </p>
      </IndicatorCard>

      <IndicatorCard icon={radiationIcon} title="Radiación solar">
        <p className="indicator-card__subtitle">Radiación global media</p>

        <p className="indicator-card__value">
          {analysis.climateData.radiation.average}{" "}
          {analysis.climateData.radiation.unit}
        </p>
      </IndicatorCard>
    </section>
  );
}

export default IndicatorCardList;
