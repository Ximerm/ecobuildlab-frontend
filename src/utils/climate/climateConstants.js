export const GEOCODING_BASE_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

export const CLIMATE_BASE_URL = "https://api.open-meteo.com/v1/forecast";

// -----------------------------------------------------------------------------
// Configuración del período climático
// -----------------------------------------------------------------------------

export const CLIMATE_PERIOD_YEARS = 30;

const CURRENT_YEAR = new Date().getFullYear();

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
