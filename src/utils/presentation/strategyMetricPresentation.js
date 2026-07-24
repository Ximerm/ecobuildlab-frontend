import { CLIMATE_METRICS } from "../strategies/strategyConstants";

import temperatureIcon from "../../images/indicators/temperature.png";
import humidityIcon from "../../images/indicators/humidity.png";
import windIcon from "../../images/indicators/wind.png";
import precipitationIcon from "../../images/indicators/precipitation.png";
import radiationIcon from "../../images/indicators/radiation.png";

export const STRATEGY_METRIC_PRESENTATION = Object.freeze({
  [CLIMATE_METRICS.SOLAR_RADIATION]: {
    icon: radiationIcon,
    shortLabel: "Radiación",
  },

  [CLIMATE_METRICS.MAX_TEMPERATURE]: {
    icon: temperatureIcon,
    shortLabel: "Temperatura",
  },

  [CLIMATE_METRICS.MIN_TEMPERATURE]: {
    icon: temperatureIcon,
    shortLabel: "Temperatura",
  },

  [CLIMATE_METRICS.AVERAGE_TEMPERATURE]: {
    icon: temperatureIcon,
    shortLabel: "Temperatura",
  },

  [CLIMATE_METRICS.RELATIVE_HUMIDITY]: {
    icon: humidityIcon,
    shortLabel: "Humedad",
  },

  [CLIMATE_METRICS.AVERAGE_WIND_SPEED]: {
    icon: windIcon,
    shortLabel: "Viento",
  },

  [CLIMATE_METRICS.ANNUAL_PRECIPITATION]: {
    icon: precipitationIcon,
    shortLabel: "Precipitación",
  },
});
