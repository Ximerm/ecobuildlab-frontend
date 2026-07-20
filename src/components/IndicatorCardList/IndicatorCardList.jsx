import "./IndicatorCardList.css";

import IndicatorCard from "../IndicatorCard/IndicatorCard";

import climateClassificationIcon from "../../images/indicators/climate-classification.png";
import temperatureIcon from "../../images/indicators/temperature.png";
import humidityIcon from "../../images/indicators/humidity.png";
import windIcon from "../../images/indicators/wind.png";
import precipitationIcon from "../../images/indicators/precipitation.png";
import radiationIcon from "../../images/indicators/radiation.png";

function IndicatorCardList() {
  return (
    <section className="indicator-card-list">
      <IndicatorCard
        icon={climateClassificationIcon}
        title="Clasificación climática"
      >
        <p className="indicator-card__subtitle">Caldas-Lang</p>

        <p className="indicator-card__value">Frío húmedo</p>
      </IndicatorCard>

      <IndicatorCard icon={temperatureIcon} title="Temperatura (°C)">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Máxima</span>
            <span className="indicator-card__number">18.5</span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Media</span>
            <span className="indicator-card__number">14.2</span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Mínima</span>
            <span className="indicator-card__number">9.8</span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={humidityIcon} title="Humedad relativa (%)">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Máxima</span>
            <span className="indicator-card__number">75</span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Media</span>
            <span className="indicator-card__number">60</span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Mínima</span>
            <span className="indicator-card__number">20</span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={windIcon} title="Viento">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Velocidad</span>
            <span className="indicator-card__number">2.5 m/s</span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Dirección</span>
            <span className="indicator-card__number">NE</span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={precipitationIcon} title="Precipitación (mm)">
        <p className="indicator-card__subtitle">Anual</p>

        <p className="indicator-card__value">980 mm</p>
      </IndicatorCard>

      <IndicatorCard icon={radiationIcon} title="Radiación solar">
        <p className="indicator-card__subtitle">Radiación global media</p>

        <p className="indicator-card__value">4.9 kWh/m²·día</p>
      </IndicatorCard>
    </section>
  );
}

export default IndicatorCardList;
