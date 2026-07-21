// -----------------------------------------------------------------------------
// Funciones auxiliares
// -----------------------------------------------------------------------------

// Calcular promedio
function calculateAverage(values) {
  if (!values || values.length === 0) {
    return null;
  }

  const sum = values.reduce((total, value) => total + value, 0);

  return Number((sum / values.length).toFixed(1));
}

// Calcular suma
function calculateSum(values) {
  if (!values || values.length === 0) {
    return null;
  }

  return Number(values.reduce((total, value) => total + value, 0).toFixed(1));
}

// Calcular dirección promedio (vectorial)
function calculateAverageDirection(directions) {
  if (!directions || directions.length === 0) {
    return null;
  }

  const radians = directions.map((deg) => (deg * Math.PI) / 180);

  const sinSum = radians.reduce((sum, rad) => sum + Math.sin(rad), 0);
  const cosSum = radians.reduce((sum, rad) => sum + Math.cos(rad), 0);

  const averageAngle =
    (Math.atan2(sinSum / radians.length, cosSum / radians.length) * 180) /
    Math.PI;

  return (averageAngle + 360) % 360;
}

// Convertir grados a dirección cardinal
function degreesToCardinal(degrees) {
  if (degrees === null) {
    return null;
  }

  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

  const index = Math.round(degrees / 45) % directions.length;

  return directions[index];
}

// -----------------------------------------------------------------------------
// Procesadores climáticos
// -----------------------------------------------------------------------------

// Procesar temperatura
function processTemperature(dailyData) {
  return {
    max: calculateAverage(dailyData.temperature_2m_max),
    average: calculateAverage(dailyData.temperature_2m_mean),
    min: calculateAverage(dailyData.temperature_2m_min),
    unit: "°C",
  };
}

// Procesar humedad relativa
function processHumidity(dailyData) {
  return {
    max: calculateAverage(dailyData.relative_humidity_2m_max),
    average: calculateAverage(dailyData.relative_humidity_2m_mean),
    min: calculateAverage(dailyData.relative_humidity_2m_min),
    unit: "%",
  };
}

// Procesar viento
function processWind(dailyData) {
  console.log({
    sample: dailyData.wind_speed_10m_mean.slice(0, 10),
    average: calculateAverage(dailyData.wind_speed_10m_mean),
  });
  const averageDirection = calculateAverageDirection(
    dailyData.wind_direction_10m_dominant,
  );

  console.log({
    sample: dailyData.wind_speed_10m_mean.slice(0, 10),
    average: calculateAverage(dailyData.wind_speed_10m_mean),
  });
  return {
    average: calculateAverage(dailyData.wind_speed_10m_mean),
    direction: degreesToCardinal(averageDirection),
  };
}

// Procesar precipitación anual promedio
function processPrecipitation(dailyData) {
  const total = calculateSum(dailyData.precipitation_sum);

  if (total === null) {
    return {
      annual: null,
      unit: "mm/year",
    };
  }

  const years = dailyData.time.length / 365.25;

  return {
    annual: Number((total / years).toFixed(1)),
    unit: "mm/year",
  };
}

// Procesar radiación solar
function processRadiation(dailyData) {
  // Open-Meteo devuelve MJ/m²/día.
  // Se convierten a kWh/m²/día (1 kWh = 3.6 MJ).

  const averageMJ = calculateAverage(dailyData.shortwave_radiation_sum);

  return {
    average: averageMJ !== null ? Number((averageMJ / 3.6).toFixed(1)) : null,
    unit: "kWh/m²/day",
  };
}

// -----------------------------------------------------------------------------
// Procesador principal
// -----------------------------------------------------------------------------

function processClimateData(dailyData) {
  return {
    temperature: processTemperature(dailyData),
    humidity: processHumidity(dailyData),
    wind: processWind(dailyData),
    precipitation: processPrecipitation(dailyData),
    radiation: processRadiation(dailyData),
  };
}

export {
  processTemperature,
  processHumidity,
  processWind,
  processPrecipitation,
  processRadiation,
  processClimateData,
};
