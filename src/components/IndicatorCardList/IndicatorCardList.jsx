/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: IndicatorCardList.jsx
 *
 * -----------------------------------------------------------------------------
 * Lista de indicadores climáticos del análisis.
 *
 * Presenta las principales variables climáticas procesadas por el backend:
 *
 * • Clasificación climática
 * • Temperatura
 * • Humedad relativa
 * • Viento
 * • Precipitación
 * • Radiación solar
 *
 * La información se obtiene directamente de la estructura
 * generada por el análisis climático del backend.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import "./IndicatorCardList.css";

import IndicatorCard from "../IndicatorCard/IndicatorCard";

import climateClassificationIcon from "../../images/indicators/climate-classification.png";
import temperatureIcon from "../../images/indicators/temperature.png";
import humidityIcon from "../../images/indicators/humidity.png";
import windIcon from "../../images/indicators/wind.png";
import precipitationIcon from "../../images/indicators/precipitation.png";
import radiationIcon from "../../images/indicators/radiation.png";

// ==============================
// Componente
// ==============================

function IndicatorCardList({ analysis }) {
  if (!analysis) {
    return null;
  }

  const { statistics, windRose } = analysis;

  // ==============================
  // Datos climáticos
  // ==============================

  const temperature = statistics?.temperature?.annual;

  const humidity = statistics?.humidity?.annual;

  const wind = statistics?.wind?.annual?.speed;

  const precipitation = statistics?.precipitation?.annual;

  const radiation = statistics?.radiation?.annual;

  const prevailingDirection = windRose?.prevailingDirection;

  // ==============================
  // Render
  // ==============================

  return (
    <section className="indicator-card-list">
      <IndicatorCard
        icon={climateClassificationIcon}
        title="Clasificación climática"
      >
        <p className="indicator-card__subtitle">Caldas-Lang</p>

        <p className="indicator-card__value">{analysis.classification.name}</p>
      </IndicatorCard>

      <IndicatorCard icon={temperatureIcon} title="Temperatura (°C)">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Máxima</span>

            <span className="indicator-card__number">
              {temperature?.maximum ?? "—"}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Media</span>

            <span className="indicator-card__number">
              {temperature?.mean ?? "—"}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Mínima</span>

            <span className="indicator-card__number">
              {temperature?.minimum ?? "—"}
            </span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={humidityIcon} title="Humedad relativa (%)">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Máxima</span>

            <span className="indicator-card__number">
              {humidity?.maximum ?? "—"}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Media</span>

            <span className="indicator-card__number">
              {humidity?.mean ?? "—"}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Mínima</span>

            <span className="indicator-card__number">
              {humidity?.minimum ?? "—"}
            </span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={windIcon} title="Viento">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Velocidad</span>

            <span className="indicator-card__number">
              {wind?.mean ?? "—"} m/s
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Dirección</span>

            <span className="indicator-card__number">
              {prevailingDirection?.name ?? "No disponible"}
            </span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={precipitationIcon} title="Precipitación (mm)">
        <p className="indicator-card__subtitle">Anual</p>

        <p className="indicator-card__value">
          {precipitation?.total ?? "—"} mm
        </p>
      </IndicatorCard>

      <IndicatorCard icon={radiationIcon} title="Radiación solar">
        <p className="indicator-card__subtitle">Radiación global media</p>

        <p className="indicator-card__value">{radiation?.mean ?? "—"}</p>
      </IndicatorCard>
    </section>
  );
}

export default IndicatorCardList;
