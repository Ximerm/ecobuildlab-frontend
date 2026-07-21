import { INDICATOR_PRIORITY } from "./climateConstants";

// -----------------------------------------------------------------------------
// Códigos de zonas térmicas
// -----------------------------------------------------------------------------

export const THERMAL_ZONE_CODES = Object.freeze({
  HIGH_MOUNTAIN: "HM",
  COLD: "C",
  TEMPERATE: "T",
  WARM: "W",
});

// -----------------------------------------------------------------------------
// Códigos de zonas de humedad
// -----------------------------------------------------------------------------

export const MOISTURE_ZONE_CODES = Object.freeze({
  ARID: "A",
  SEMI_ARID: "SA",
  SUB_HUMID_DRY: "SH",
  HUMID: "H",
  VERY_HUMID: "VH",
  PER_HUMID: "PH",
});

// -----------------------------------------------------------------------------
// Clasificación térmica (Temperatura media anual)
// -----------------------------------------------------------------------------

export const THERMAL_ZONES = Object.freeze([
  {
    code: THERMAL_ZONE_CODES.HIGH_MOUNTAIN,

    name: "Alta montaña",

    minInclusive: Number.NEGATIVE_INFINITY,
    maxExclusive: 12,

    summary: "Temperaturas muy bajas durante todo el año.",

    description: "Presenta una temperatura media anual inferior a 12 °C.",

    classificationIndicators: [
      {
        label: "Temperatura media anual",
        classificationRange: "< 12",
        unit: "°C",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de temperaturas muy bajas durante todo el año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Frecuentes condiciones de frío intenso.",
        priority: PRIORITY.MEDIUM,
      },
      {
        text: "Alta demanda de conservación del calor en las edificaciones.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },

  {
    code: THERMAL_ZONE_CODES.COLD,

    name: "Frío",

    minInclusive: 12,
    maxExclusive: 17,

    summary: "Temperaturas bajas durante gran parte del año.",

    description:
      "Presenta una temperatura media anual entre 12 °C y menos de 17 °C.",

    classificationIndicators: [
      {
        label: "Temperatura media anual",
        classificationRange: "12–<17",
        unit: "°C",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de temperaturas bajas durante gran parte del año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Pueden presentarse pérdidas importantes de calor en las edificaciones.",
        priority: PRIORITY.MEDIUM,
      },
      {
        text: "Las ganancias solares contribuyen al confort térmico.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },

  {
    code: THERMAL_ZONE_CODES.TEMPERATE,

    name: "Templado",

    minInclusive: 17,
    maxExclusive: 24,

    summary: "Temperaturas moderadas durante la mayor parte del año.",

    description:
      "Presenta una temperatura media anual entre 17 °C y menos de 24 °C.",

    classificationIndicators: [
      {
        label: "Temperatura media anual",
        classificationRange: "17–<24",
        unit: "°C",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de temperaturas moderadas durante gran parte del año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Las condiciones favorecen la aplicación de estrategias pasivas de diseño.",
        priority: PRIORITY.MEDIUM,
      },
      {
        text: "Las necesidades de calefacción o enfriamiento suelen ser moderadas.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },

  {
    code: THERMAL_ZONE_CODES.WARM,

    name: "Cálido",

    minInclusive: 24,
    maxExclusive: Number.POSITIVE_INFINITY,

    summary: "Temperaturas altas durante gran parte del año.",

    description:
      "Presenta una temperatura media anual igual o superior a 24 °C.",

    classificationIndicators: [
      {
        label: "Temperatura media anual",
        classificationRange: "≥ 24",
        unit: "°C",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de temperaturas elevadas durante gran parte del año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Existe riesgo de sobrecalentamiento en los edificios.",
        priority: PRIORITY.MEDIUM,
      },
      {
        text: "Las estrategias de protección solar y ventilación natural adquieren mayor importancia.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },
]);

// -----------------------------------------------------------------------------
// Clasificación de acuerdo con el índice de Lang
// -----------------------------------------------------------------------------

export const MOISTURE_ZONES = Object.freeze([
  {
    code: MOISTURE_ZONE_CODES.ARID,

    name: "Árido",

    minInclusive: Number.NEGATIVE_INFINITY,
    maxExclusive: 20,

    summary: "Predomina una disponibilidad muy baja de humedad.",

    description: "Índice de Lang inferior a 20.",

    classificationIndicators: [
      {
        label: "Índice de Lang",
        classificationRange: "< 20",
        unit: "",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de precipitaciones muy escasas durante el año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Largos períodos secos.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },

  {
    code: MOISTURE_ZONE_CODES.SEMI_ARID,

    name: "Semiárido",

    minInclusive: 20,
    maxExclusive: 40,

    summary: "Predomina una baja disponibilidad de humedad.",

    description: "Índice de Lang entre 20 y 40.",

    classificationIndicators: [
      {
        label: "Índice de Lang",
        classificationRange: "20–<40",
        unit: "",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de precipitaciones limitadas durante el año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Períodos secos frecuentes.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },

  {
    code: MOISTURE_ZONE_CODES.SUB_HUMID_DRY,

    name: "Subhúmedo seco",

    minInclusive: 40,
    maxExclusive: 60,

    summary: "Predomina una disponibilidad intermedia de humedad.",

    description: "Índice de Lang entre 40 y 60.",

    classificationIndicators: [
      {
        label: "Índice de Lang",
        classificationRange: "40–<60",
        unit: "",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de precipitaciones moderadas durante el año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Alternancia entre períodos húmedos y secos.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },

  {
    code: MOISTURE_ZONE_CODES.HUMID,

    name: "Húmedo",

    minInclusive: 60,
    maxExclusive: 100,

    summary: "Predomina una alta disponibilidad de humedad.",

    description: "Índice de Lang entre 60 y 100.",

    classificationIndicators: [
      {
        label: "Índice de Lang",
        classificationRange: "60–<100",
        unit: "",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de precipitaciones abundantes durante el año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Períodos húmedos frecuentes.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },

  {
    code: MOISTURE_ZONE_CODES.VERY_HUMID,

    name: "Muy húmedo",

    minInclusive: 100,
    maxExclusive: 160,

    summary: "Predomina una muy alta disponibilidad de humedad.",

    description: "Índice de Lang entre 100 y 160.",

    classificationIndicators: [
      {
        label: "Índice de Lang",
        classificationRange: "100–<160",
        unit: "",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de precipitaciones muy abundantes durante el año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Períodos húmedos persistentes.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },

  {
    code: MOISTURE_ZONE_CODES.PER_HUMID,

    name: "Perhúmedo",

    minInclusive: 160,
    maxExclusive: Number.POSITIVE_INFINITY,

    summary: "Predomina una humedad muy elevada durante el año.",

    description: "Índice de Lang igual o superior a 160.",

    classificationIndicators: [
      {
        label: "Índice de Lang",
        classificationRange: "≥ 160",
        unit: "",
        priority: PRIORITY.HIGH,
      },
    ],

    climateCharacteristics: [
      {
        text: "Predominio de precipitaciones extremadamente abundantes durante el año.",
        priority: PRIORITY.HIGH,
      },
      {
        text: "Ausencia o muy baja ocurrencia de períodos secos.",
        priority: PRIORITY.MEDIUM,
      },
    ],
  },
]);
