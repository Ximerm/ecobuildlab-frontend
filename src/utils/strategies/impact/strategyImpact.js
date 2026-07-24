import { STRATEGY_IMPACT_CONFIG } from "./strategyImpactConfig";
import { normalizeMetric } from "./metricNormalizers";
import { getImpactLevel } from "./impactScale";
import { getMetricValue } from "../strategyMetricSelectors";

/**
 * Calcula el impacto estimado de una estrategia bioclimática
 * a partir del análisis climático.
 *
 * @param {string} strategyCode Código de la estrategia.
 * @param {Object} analysis Resultado del análisis climático.
 * @returns {Object} Resultado del impacto calculado.
 */
export function calculateStrategyImpact(strategyCode, analysis) {
  const config = STRATEGY_IMPACT_CONFIG[strategyCode];

  if (!config) {
    throw new Error(
      `No existe una configuración de impacto para la estrategia: ${strategyCode}.`,
    );
  }

  const { score, metricBreakdown } = calculateWeightedScore(
    config.metrics,
    analysis,
  );

  return {
    ...getImpactLevel(score),
    metricBreakdown,
  };
}

/**
 * Calcula el promedio ponderado del impacto de una estrategia.
 *
 * @param {Array} metricsConfig Configuración de métricas y pesos.
 * @param {Object} analysis Resultado del análisis climático.
 * @returns {{
 *   score: number,
 *   metricBreakdown: Array
 * }}
 */
function calculateWeightedScore(metricsConfig, analysis) {
  let totalScore = 0;

  const metricBreakdown = metricsConfig.map(({ metric, weight }) => {
    const value = getMetricValue(metric, analysis);

    if (value == null || Number.isNaN(value)) {
      throw new Error(
        `No existe un valor válido para la métrica climática: ${metric}.`,
      );
    }

    const normalizedScore = normalizeMetric(metric, value);

    const weightedScore = Number((normalizedScore * (weight / 100)).toFixed(2));

    totalScore += weightedScore;

    return {
      metric,
      value,
      normalizedScore,
      weight,
      weightedScore,
    };
  });

  return {
    score: Number(totalScore.toFixed(2)),
    metricBreakdown,
  };
}
