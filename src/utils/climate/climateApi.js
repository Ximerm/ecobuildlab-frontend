import {
  CLIMATE_BASE_URL,
  GEOCODING_BASE_URL,
  CLIMATE_PERIOD,
} from "./climateConstants";

import { processClimateData } from "./climateProcessors";
import { getClimateClassification } from "./climateClassification";

import { generateStrategies } from "../strategies/strategyGenerator";

// -----------------------------------------------------------------------------
// API Helpers
// -----------------------------------------------------------------------------

/**
 * Valida la respuesta de la API y devuelve los datos en formato JSON.
 *
 * @param {Response} res
 * @returns {Promise<Object>}
 */
function checkResponse(res) {
  if (!res.ok) {
    switch (res.status) {
      case 400:
        throw new Error(
          "La solicitud es inválida. Verifica los parámetros de la búsqueda.",
        );

      case 404:
        throw new Error("No se encontró la ciudad solicitada.");

      case 429:
        throw new Error(
          "El servicio climático está recibiendo demasiadas solicitudes. Intenta nuevamente en unos minutos.",
        );

      case 500:
        throw new Error(
          "El servidor presentó un problema. Intenta nuevamente más tarde.",
        );

      default:
        throw new Error("No fue posible obtener los datos climáticos.");
    }
  }

  return res.json();
}

// -----------------------------------------------------------------------------
// Geocoding
// -----------------------------------------------------------------------------

/**
 * Busca una ciudad por su nombre y devuelve sus datos de ubicación.
 *
 * @param {String} city
 * @returns {Promise<Object>}
 */
export function searchLocation(city) {
  const url = new URL(GEOCODING_BASE_URL);

  url.searchParams.set("name", city);
  url.searchParams.set("count", 1);
  url.searchParams.set("language", "es");
  url.searchParams.set("format", "json");

  return fetch(url)
    .then(checkResponse)
    .then((data) => {
      if (!data.results?.length) {
        throw new Error("No se encontró la ciudad solicitada.");
      }

      const location = data.results[0];

      return {
        name: location.name,
        country: location.country,
        latitude: location.latitude,
        longitude: location.longitude,
        elevation: location.elevation,
      };
    });
}

// -----------------------------------------------------------------------------
// Climate API
// -----------------------------------------------------------------------------

/**
 * Obtiene los datos climáticos históricos de una ubicación.
 *
 * @param {Number} latitude
 * @param {Number} longitude
 * @returns {Promise<Object>}
 */
export function fetchClimateData(latitude, longitude) {
  const url = new URL(CLIMATE_BASE_URL);

  url.searchParams.set("latitude", latitude);
  url.searchParams.set("longitude", longitude);

  url.searchParams.set("start_date", CLIMATE_PERIOD.startDate);
  url.searchParams.set("end_date", CLIMATE_PERIOD.endDate);

  url.searchParams.set("wind_speed_unit", "ms");

  url.searchParams.set(
    "daily",
    [
      "temperature_2m_max",
      "temperature_2m_mean",
      "temperature_2m_min",
      "relative_humidity_2m_max",
      "relative_humidity_2m_mean",
      "relative_humidity_2m_min",
      "wind_speed_10m_mean",
      "wind_direction_10m_dominant",
      "shortwave_radiation_sum",
      "precipitation_sum",
    ].join(","),
  );

  url.searchParams.set("timezone", "auto");

  return fetch(url).then(checkResponse);
}

// -----------------------------------------------------------------------------
// Climate Analysis
// -----------------------------------------------------------------------------

/**
 * Obtiene toda la información necesaria para el análisis climático.
 *
 * Flujo:
 * 1. Buscar ubicación.
 * 2. Obtener datos climáticos.
 * 3. Procesar métricas.
 * 4. Clasificar el clima.
 * 5. Generar estrategias.
 *
 * @param {String} city
 * @returns {Promise<Object>}
 */

export async function getClimateAnalysisData(city) {
  const location = await searchLocation(city);

  const rawClimateData = await fetchClimateData(
    location.latitude,
    location.longitude,
  );

  const climateData = processClimateData(
    rawClimateData.daily,
    rawClimateData.daily_units,
  );

  const classification = getClimateClassification(climateData);

  const analysis = {
    location,
    climateData,
    classification,
  };

  return {
    ...analysis,
    strategies: generateStrategies(analysis),
  };
}
