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
 * • Irradiación solar
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
// Funciones auxiliares
// ==============================

/**
 * Formatea los valores numéricos para su presentación.
 *
 * Los valores climáticos se muestran con dos decimales
 * para mantener una presentación técnica y consistente
 * en todos los indicadores.
 *
 * Esta función únicamente modifica la presentación del dato.
 * El valor original recibido desde el backend no se modifica.
 *
 * @param {number|null|undefined} value Valor numérico.
 * @returns {string} Valor formateado o guion cuando no existe.
 */
function formatValue(value) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "—";
  }

  return Number(value).toFixed(2);
}

// ==============================
// Componente
// ==============================

function IndicatorCardList({ analysis }) {
  if (!analysis) {
    return null;
  }

  const { statistics, windRose } = analysis;

  // ==============================
  // Unidades
  // ==============================

  /**
   * Las unidades provienen del backend y corresponden
   * a las unidades configuradas en Open-Meteo.
   *
   * Se utilizan valores de respaldo para evitar que la
   * interfaz quede sin unidad si el dato no está disponible.
   */
  const units = analysis?.units;

  const temperatureUnit = units?.temperature_2m ?? "°C";

  const windUnit = units?.wind_speed_10m ?? "m/s";

  const precipitationUnit = units?.precipitation ?? "mm";

  // ==============================
  // Datos climáticos
  // ==============================

  const temperature = statistics?.temperature?.annual;

  const humidity = statistics?.humidity?.annual;

  const wind = statistics?.wind?.annual?.speed;

  const precipitation = statistics?.precipitation?.annual;

  const solarIrradiation = statistics?.solarIrradiation?.annual;

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

      <IndicatorCard
        icon={temperatureIcon}
        title={`Temperatura (${temperatureUnit})`}
      >
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Máxima</span>

            <span className="indicator-card__number">
              {formatValue(temperature?.maximum)}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Media</span>

            <span className="indicator-card__number">
              {formatValue(temperature?.mean)}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Mínima</span>

            <span className="indicator-card__number">
              {formatValue(temperature?.minimum)}
            </span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={humidityIcon} title="Humedad relativa (%)">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Máxima</span>

            <span className="indicator-card__number">
              {formatValue(humidity?.maximum)}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Media</span>

            <span className="indicator-card__number">
              {formatValue(humidity?.mean)}
            </span>
          </div>

          <div className="indicator-card__stat">
            <span className="indicator-card__label">Mínima</span>

            <span className="indicator-card__number">
              {formatValue(humidity?.minimum)}
            </span>
          </div>
        </div>
      </IndicatorCard>

      <IndicatorCard icon={windIcon} title="Viento">
        <div className="indicator-card__stats">
          <div className="indicator-card__stat">
            <span className="indicator-card__label">Velocidad</span>

            <span className="indicator-card__number">
              {formatValue(wind?.mean)} {windUnit}
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

      <IndicatorCard
        icon={precipitationIcon}
        title={`Precipitación (${precipitationUnit})`}
      >
        <p className="indicator-card__subtitle">Anual</p>

        <p className="indicator-card__value">
          {formatValue(precipitation?.total)} mm
        </p>
      </IndicatorCard>

      <IndicatorCard icon={radiationIcon} title="Irradiación solar">
        <p className="indicator-card__subtitle">
          Irradiación solar global media
        </p>

        <p className="indicator-card__value">
          {formatValue(solarIrradiation?.mean)} kWh/m²·día
        </p>
      </IndicatorCard>
    </section>
  );
}

export default IndicatorCardList;
