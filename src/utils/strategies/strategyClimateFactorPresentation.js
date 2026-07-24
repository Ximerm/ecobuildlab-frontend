import { CLIMATE_FACTORS } from "./strategyConstants";

import temperatureIcon from "../../images/indicators/temperature.png";
import humidityIcon from "../../images/indicators/humidity.png";
import windIcon from "../../images/indicators/wind.png";
import precipitationIcon from "../../images/indicators/precipitation.png";
import radiationIcon from "../../images/indicators/radiation.png";

export const STRATEGY_CLIMATE_FACTOR_PRESENTATION = Object.freeze({
  [CLIMATE_FACTORS.TEMPERATURE]: {
    icon: temperatureIcon,
    label: "Temperatura",
  },

  [CLIMATE_FACTORS.SOLAR_RADIATION]: {
    icon: radiationIcon,
    label: "Radiación",
  },

  [CLIMATE_FACTORS.WIND]: {
    icon: windIcon,
    label: "Viento",
  },

  [CLIMATE_FACTORS.HUMIDITY]: {
    icon: humidityIcon,
    label: "Humedad",
  },

  [CLIMATE_FACTORS.PRECIPITATION]: {
    icon: precipitationIcon,
    label: "Precipitación",
  },
});
