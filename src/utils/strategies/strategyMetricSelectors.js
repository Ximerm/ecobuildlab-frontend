import { CLIMATE_METRICS } from "./strategyConstants";

/**
 * Funciones selectoras para acceder a las métricas climáticas
 * utilizadas por el motor de recomendaciones.
 */

export const strategyMetricSelectors = Object.freeze({
  [CLIMATE_METRICS.AVERAGE_TEMPERATURE]: (analysis) =>
    analysis.climateData.temperature.average,

  [CLIMATE_METRICS.MAX_TEMPERATURE]: (analysis) =>
    analysis.climateData.temperature.max,

  [CLIMATE_METRICS.MIN_TEMPERATURE]: (analysis) =>
    analysis.climateData.temperature.min,

  [CLIMATE_METRICS.RELATIVE_HUMIDITY]: (analysis) =>
    analysis.climateData.humidity.average,

  [CLIMATE_METRICS.AVERAGE_WIND_SPEED]: (analysis) =>
    analysis.climateData.wind.average,

  [CLIMATE_METRICS.SOLAR_RADIATION]: (analysis) =>
    analysis.climateData.radiation.average,

  [CLIMATE_METRICS.ANNUAL_PRECIPITATION]: (analysis) =>
    analysis.climateData.precipitation.annual,
});

export function getMetricValue(metric, analysis) {
  const selector = strategyMetricSelectors[metric];

  if (!selector) {
    throw new Error(
      `No existe un selector definido para la métrica climática: ${metric}.`,
    );
  }

  return selector(analysis);
}
