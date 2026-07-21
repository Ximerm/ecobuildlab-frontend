import {
  STRATEGY_CODES,
  STRATEGY_CATEGORIES,
  CLIMATE_FACTORS,
} from "./strategyConstants";

// -----------------------------------------------------------------------------
// Catálogo de estrategias bioclimáticas
// -----------------------------------------------------------------------------
//
// Cada estrategia representa un principio general de diseño bioclimático.
//
// strategyRecommendations.js contiene las recomendaciones específicas que se
// activan según las condiciones climáticas.
//
// -----------------------------------------------------------------------------

export const strategyCatalog = Object.freeze([
  {
    code: STRATEGY_CODES.ORIENTATION,

    order: 1,

    title: "Orientación",

    category: STRATEGY_CATEGORIES.SITE,

    objective:
      "Reducir la exposición solar no deseada, favorecer la ventilación natural y aprovechar la iluminación natural.",

    expectedImpact:
      "Optimiza el aprovechamiento de las condiciones climáticas del sitio para mejorar el confort térmico y reducir el consumo energético.",

    explanation:
      "La orientación del edificio determina la cantidad de radiación solar recibida, la exposición a los vientos predominantes y el potencial de iluminación natural.",

    climateFactors: [
      CLIMATE_FACTORS.TEMPERATURE,
      CLIMATE_FACTORS.SOLAR_RADIATION,
      CLIMATE_FACTORS.WIND,
    ],
  },

  {
    code: STRATEGY_CODES.SOLAR_PROTECTION,

    order: 2,

    title: "Protección solar",

    category: STRATEGY_CATEGORIES.ENVELOPE,

    objective:
      "Controlar la radiación solar incidente sobre fachadas y ventanas mediante estrategias pasivas.",

    expectedImpact:
      "Reduce las ganancias térmicas ocasionadas por la radiación solar directa y mejora el confort interior.",

    explanation:
      "Una adecuada protección solar disminuye el sobrecalentamiento, mejora el desempeño energético y aumenta el confort térmico.",

    climateFactors: [
      CLIMATE_FACTORS.SOLAR_RADIATION,
      CLIMATE_FACTORS.TEMPERATURE,
    ],
  },

  {
    code: STRATEGY_CODES.WINDOW_DESIGN,

    order: 3,

    title: "Diseño de ventanas",

    category: STRATEGY_CATEGORIES.ENVELOPE,

    objective:
      "Optimizar el tamaño, ubicación y características de las ventanas según las condiciones climáticas.",

    expectedImpact:
      "Mejora el desempeño térmico, lumínico y de ventilación de la edificación.",

    explanation:
      "Las ventanas influyen directamente en las ganancias térmicas, la iluminación natural y la ventilación cruzada.",

    climateFactors: [
      CLIMATE_FACTORS.SOLAR_RADIATION,
      CLIMATE_FACTORS.WIND,
      CLIMATE_FACTORS.TEMPERATURE,
    ],
  },

  {
    code: STRATEGY_CODES.NATURAL_VENTILATION,

    order: 4,

    title: "Ventilación natural",

    category: STRATEGY_CATEGORIES.COMFORT,

    objective:
      "Aprovechar el movimiento natural del aire para mejorar el confort térmico.",

    expectedImpact:
      "Favorece el enfriamiento pasivo y mejora la calidad del aire interior.",

    explanation:
      "Una correcta ventilación natural contribuye a disipar el calor acumulado y renovar el aire interior.",

    climateFactors: [
      CLIMATE_FACTORS.WIND,
      CLIMATE_FACTORS.TEMPERATURE,
      CLIMATE_FACTORS.HUMIDITY,
    ],
  },

  {
    code: STRATEGY_CODES.THERMAL_INSULATION,

    order: 5,

    title: "Aislamiento térmico",

    category: STRATEGY_CATEGORIES.ENVELOPE,

    objective: "Mejorar el desempeño térmico de muros, cubiertas y pisos.",

    expectedImpact:
      "Reduce las pérdidas y ganancias de calor a través de la envolvente del edificio.",

    explanation:
      "El aislamiento térmico estabiliza la temperatura interior y disminuye la demanda energética.",

    climateFactors: [CLIMATE_FACTORS.TEMPERATURE],
  },

  {
    code: STRATEGY_CODES.DAYLIGHTING,

    order: 6,

    title: "Iluminación natural",

    category: STRATEGY_CATEGORIES.COMFORT,

    objective:
      "Maximizar el ingreso de luz natural sin generar deslumbramiento ni sobrecalentamiento.",

    expectedImpact:
      "Incrementa el aprovechamiento de la luz natural y reduce el consumo de iluminación artificial.",

    explanation:
      "Una adecuada iluminación natural mejora el confort visual y reduce el consumo energético.",

    climateFactors: [CLIMATE_FACTORS.SOLAR_RADIATION],
  },

  {
    code: STRATEGY_CODES.VEGETATION,

    order: 7,

    title: "Vegetación",

    category: STRATEGY_CATEGORIES.LANDSCAPE,

    objective:
      "Incorporar vegetación para proporcionar sombra, reducir la temperatura superficial y mejorar el confort exterior.",

    expectedImpact:
      "Contribuye a regular el microclima y mejorar las condiciones ambientales del entorno.",

    explanation:
      "La vegetación modifica el microclima mediante sombra, evapotranspiración y protección frente al viento.",

    climateFactors: [
      CLIMATE_FACTORS.TEMPERATURE,
      CLIMATE_FACTORS.SOLAR_RADIATION,
      CLIMATE_FACTORS.WIND,
      CLIMATE_FACTORS.HUMIDITY,
    ],
  },

  {
    code: STRATEGY_CODES.MATERIALS_FINISHES,

    order: 8,

    title: "Materiales y acabados",

    category: STRATEGY_CATEGORIES.ENVELOPE,

    objective:
      "Seleccionar materiales y acabados acordes con las condiciones climáticas del sitio.",

    expectedImpact:
      "Mejora el comportamiento térmico de la envolvente mediante la selección adecuada de materiales.",

    explanation:
      "Las propiedades térmicas y ópticas de los materiales influyen directamente en el desempeño energético y el confort térmico.",

    climateFactors: [
      CLIMATE_FACTORS.TEMPERATURE,
      CLIMATE_FACTORS.SOLAR_RADIATION,
    ],
  },
]);
