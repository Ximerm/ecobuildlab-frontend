import { METRIC_SCALES } from "../metricScales";

// Obtiene la escala
export function normalizeMetric(metric, value) {
  const metricScale = METRIC_SCALES[metric];

  if (!metricScale) {
    throw new Error(
      `No existe una escala de normalización para la métrica climática: ${metric}.`,
    );
  }

  return interpolate(metricScale.referencePoints, value);
}

function interpolate(referencePoints, value) {
  const firstPoint = referencePoints[0];
  const lastPoint = referencePoints[referencePoints.length - 1];

  // Limita al valor mínimo
  if (value <= firstPoint.value) {
    return firstPoint.score;
  }

  // Limita al valor máximo
  if (value >= lastPoint.value) {
    return lastPoint.score;
  }

  // Busca el intervalo correspondiente
  for (let index = 1; index < referencePoints.length; index++) {
    const start = referencePoints[index - 1];
    const end = referencePoints[index];

    if (value >= start.value && value <= end.value) {
      return interpolateSegment(start, end, value);
    }
  }

  return lastPoint.score;
}

function interpolateSegment(start, end, value) {
  const valueRange = end.value - start.value;
  const valueOffset = value - start.value;

  const percentage = valueOffset / valueRange;

  const scoreRange = end.score - start.score;

  return Math.round(start.score + scoreRange * percentage);
}
