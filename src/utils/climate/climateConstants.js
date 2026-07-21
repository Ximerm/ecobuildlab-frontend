export const GEOCODING_BASE_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

export const CLIMATE_BASE_URL = "https://archive-api.open-meteo.com/v1/archive";

// -----------------------------------------------------------------------------
// Configuración del período climático
// -----------------------------------------------------------------------------

const CURRENT_YEAR = new Date().getFullYear();

const CLIMATE_PERIOD_YEARS = import.meta.env.DEV ? 10 : 30;

export const CLIMATE_PERIOD = Object.freeze({
  startDate: `${CURRENT_YEAR - CLIMATE_PERIOD_YEARS}-01-01`,
  endDate: `${CURRENT_YEAR - 1}-12-31`,
});

// Niveles de prioridad
export const INDICATOR_PRIORITY = Object.freeze({
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
});
