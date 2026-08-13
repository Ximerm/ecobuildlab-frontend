/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: strategyMetricPresentation.js
 * -----------------------------------------------------------------------------
 *
 * Define la información utilizada por la interfaz para presentar
 * las métricas climáticas consideradas en la evaluación de las estrategias.
 *
 * Los códigos de las métricas corresponden a los identificadores
 * utilizados por el backend.
 *
 * -----------------------------------------------------------------------------
 *
 */

// ==============================
// Dependencias
// ==============================

import temperatureIcon from "../../images/indicators/temperature.png";
import humidityIcon from "../../images/indicators/humidity.png";
import windIcon from "../../images/indicators/wind.png";
import precipitationIcon from "../../images/indicators/Precipitation.png";
import radiationIcon from "../../images/indicators/radiation.png";

// ==============================
// Información de presentación
// ==============================

/**
 *
 * Define la información visual asociada a cada métrica climática.
 *
 * Incluye:
 *
 * • Nombre de la métrica.
 * • Unidad de medida.
 * • Etiqueta corta.
 * • Icono utilizado en la interfaz.
 *
 */

export const STRATEGY_METRIC_PRESENTATION = Object.freeze({
  solarRadiation: {
    label: "Radiación solar",
    unit: "kWh/m²·día",
    shortLabel: "Radiación",
    icon: radiationIcon,
  },

  maxTemperature: {
    label: "Temperatura máxima",
    unit: "°C",
    shortLabel: "Temperatura",
    icon: temperatureIcon,
  },

  minTemperature: {
    label: "Temperatura mínima",
    unit: "°C",
    shortLabel: "Temperatura",
    icon: temperatureIcon,
  },

  averageTemperature: {
    label: "Temperatura media",
    unit: "°C",
    shortLabel: "Temperatura",
    icon: temperatureIcon,
  },

  relativeHumidity: {
    label: "Humedad relativa",
    unit: "%",
    shortLabel: "Humedad",
    icon: humidityIcon,
  },

  averageWindSpeed: {
    label: "Velocidad media del viento",
    unit: "m/s",
    shortLabel: "Viento",
    icon: windIcon,
  },

  annualPrecipitation: {
    label: "Precipitación anual",
    unit: "mm",
    shortLabel: "Precipitación",
    icon: precipitationIcon,
  },
});
