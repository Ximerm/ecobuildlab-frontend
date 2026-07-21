import { strategyCatalog } from "./strategyCatalog";

import { strategyRecommendations } from "./strategyRecommendations";
import { strategyMetricSelectors } from "./strategyMetricSelectors";

import { RECOMMENDATION_PRIORITY } from "./strategyConstants";

/**
 * Define el orden de las prioridades.
 *
 * Esto desacopla el orden lógico de los valores
 * definidos en RECOMMENDATION_PRIORITY.
 */
const PRIORITY_ORDER = Object.freeze({
  [RECOMMENDATION_PRIORITY.HIGH]: 0,
  [RECOMMENDATION_PRIORITY.MEDIUM]: 1,
  [RECOMMENDATION_PRIORITY.LOW]: 2,
});

// -----------------------------------------------------------------------------
// Generador de estrategias bioclimáticas
// -----------------------------------------------------------------------------
//
// Este módulo construye las estrategias bioclimáticas aplicables
// a partir del análisis climático, evaluando las condiciones de
// cada recomendación y ordenándolas según su prioridad.
/**
 *
 * Genera todas las estrategias bioclimáticas aplicables
 * para un análisis climático.
 *
 * @param {Object} analysis Resultado del análisis climático.
 * @returns {Array} Estrategias con sus recomendaciones.
 */

export function generateStrategies(analysis) {
  return strategyCatalog.map((strategy) => buildStrategy(strategy, analysis));
}

/**
 * Construye una estrategia incorporando únicamente
 * las recomendaciones que cumplen las condiciones climáticas.
 *
 * @param {Object} strategy Estrategia del catálogo.
 * @param {Object} analysis Resultado del análisis climático.
 * @returns {Object}
 */

function buildStrategy(strategy, analysis) {
  const recommendations = getApplicableRecommendations(strategy.code, analysis);

  return {
    ...strategy,
    recommendations,
    hasRecommendations: recommendations.length > 0,
  };
}

/**
 * Obtiene las recomendaciones aplicables para una estrategia
 * y las ordena según su prioridad.
 *
 * @param {String} strategyCode Código de la estrategia.
 * @param {Object} analysis Resultado del análisis climático.
 * @returns {Array}
 */

function getApplicableRecommendations(strategyCode, analysis) {
  const recommendations = strategyRecommendations[strategyCode] ?? [];

  return recommendations
    .filter((recommendation) =>
      matchesConditions(recommendation.conditions, analysis),
    )
    .sort(comparePriority);
}

/**
 * Verifica si una recomendación cumple todas
 * las condiciones necesarias.
 *
 * @param {Object} conditions
 * @param {Object} analysis
 * @returns {Boolean}
 */

function matchesConditions(conditions = {}, analysis) {
  return (
    matchesThermalZone(conditions.thermalZones, analysis) &&
    matchesMoistureZone(conditions.moistureZones, analysis) &&
    matchesMetrics(conditions.metrics, analysis)
  );
}

/**
 * Verifica si la zona térmica del análisis
 * coincide con las requeridas por la recomendación.
 *
 * @param {Array} thermalZones
 * @param {Object} analysis
 * @returns {Boolean}
 */

function matchesThermalZone(thermalZones, analysis) {
  if (!thermalZones?.length) {
    return true;
  }

  return thermalZones.includes(analysis.classification.thermalZone.code);
}

/**
 * Verifica si la zona de humedad del análisis
 * coincide con las requeridas por la recomendación.
 *
 * @param {Array} moistureZones
 * @param {Object} analysis
 * @returns {Boolean}
 */

function matchesMoistureZone(moistureZones, analysis) {
  if (!moistureZones?.length) {
    return true;
  }

  return moistureZones.includes(analysis.classification.moistureZone.code);
}

/**
 * Evalúa todas las métricas climáticas definidas
 * para una recomendación.
 *
 * Todas las métricas deben cumplirse para que
 * la recomendación sea considerada aplicable.
 *
 * @param {Object} metrics
 * @param {Object} analysis
 * @returns {Boolean}
 */

function matchesMetrics(metrics, analysis) {
  if (!metrics) {
    return true;
  }

  return Object.entries(metrics).every(([metric, limits]) => {
    const selector = strategyMetricSelectors[metric];
    // La métrica no está registrada en los selectores.
    if (!selector) {
      return false;
    }

    const value = selector(analysis);

    return compareMetric(value, limits);
  });
}

/**
 * Compara una métrica climática con los límites
 * establecidos por la recomendación.
 *
 * Soporta:
 *
 * { min }
 * { max }
 * { min, max }
 *
 * @param {Number} value Valor de la métrica.
 * @param {Object} limits Límites definidos.
 * @returns {Boolean}
 */

function compareMetric(value, limits) {
  if (value == null) {
    return false;
  }

  const { min, max } = limits;

  if (min !== undefined && value < min) {
    return false;
  }

  if (max !== undefined && value > max) {
    return false;
  }

  return true;
}

/**
 * Ordena las recomendaciones según su prioridad.
 *
 * El orden se define mediante PRIORITY_ORDER para evitar
 * depender de los valores numéricos de las constantes.
 *
 * @param {Object} recommendationA
 * @param {Object} recommendationB
 * @returns {Number}
 */
function comparePriority(recommendationA, recommendationB) {
  return (
    PRIORITY_ORDER[recommendationA.priority] -
    PRIORITY_ORDER[recommendationB.priority]
  );
}
