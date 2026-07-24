import { THERMAL_ZONES, MOISTURE_ZONES } from "./climateClassificationData";

const CLASSIFICATION_METHOD = Object.freeze({
  code: "CL",
  name: "Caldas-Lang",
});

const CLASSIFICATION_SEPARATOR = "-";

// Calcular índice clasificación Lang
function calculateLangIndex(annualMeanTemperature, annualPrecipitation) {
  if (annualMeanTemperature == null || annualPrecipitation == null) {
    return null;
  }

  if (annualMeanTemperature <= 0) {
    return null;
  }

  return annualPrecipitation / annualMeanTemperature;
}

// Buscar zona térmica
function findThermalZone(annualMeanTemperature) {
  const zone = THERMAL_ZONES.find(
    (zone) =>
      annualMeanTemperature >= zone.minInclusive &&
      annualMeanTemperature < zone.maxExclusive,
  );

  if (!zone) {
    throw new Error("Thermal zone not found.");
  }

  return zone;
}

// Buscar zona de humedad - Lang
function findMoistureZone(langIndex) {
  const zone = MOISTURE_ZONES.find(
    (zone) => langIndex >= zone.minInclusive && langIndex < zone.maxExclusive,
  );

  if (!zone) {
    throw new Error("Moisture zone not found.");
  }

  return zone;
}

// Construir clasificación climática
function createClimateClassification(langIndex, thermalZone, moistureZone) {
  return {
    method: CLASSIFICATION_METHOD,

    metrics: {
      langIndex,
    },

    thermalZone,

    moistureZone,

    climate: {
      code: `${thermalZone.code}${CLASSIFICATION_SEPARATOR}${moistureZone.code}`,
      name: `${thermalZone.name} ${moistureZone.name.toLowerCase()}`,
    },
  };
}

// Obtener clasificación climática
export function getClimateClassification(climateData) {
  const { average: annualMeanTemperature } = climateData.temperature;
  const { annual: annualPrecipitation } = climateData.precipitation;

  const langIndex = calculateLangIndex(
    annualMeanTemperature,
    annualPrecipitation,
  );

  if (langIndex === null) {
    throw new Error("Unable to calculate Lang index.");
  }

  const thermalZone = findThermalZone(annualMeanTemperature);

  const moistureZone = findMoistureZone(langIndex);

  return createClimateClassification(langIndex, thermalZone, moistureZone);
}
