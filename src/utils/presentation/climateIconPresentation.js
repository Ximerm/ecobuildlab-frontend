/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: climateIconPresentation.js
 * -----------------------------------------------------------------------------
 * Define la correspondencia entre los códigos de clasificación climática
 * y las imágenes utilizadas para su representación visual en la interfaz.
 *
 * Los códigos completos generados por el backend se adaptan a las categorías
 * visuales disponibles en el frontend.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import coldHumidIcon from "../../images/climates/cold-humid.png";
import coldDryIcon from "../../images/climates/cold-dry.png";
import temperateHumidIcon from "../../images/climates/temperate-humid.png";
import temperateDryIcon from "../../images/climates/temperate-dry.png";
import warmHumidIcon from "../../images/climates/warm-humid.png";
import warmDryIcon from "../../images/climates/warm-dry.png";
import paramoIcon from "../../images/climates/paramo.png";
import defaultClimateIcon from "../../images/climates/default.png";

// ==============================
// Iconos de presentación
// ==============================

/**
 *
 * Define los iconos asociados a los códigos climáticos
 * simplificados utilizados por la interfaz.
 *
 */

export const CLIMATE_ICON_PRESENTATION = {
  CH: coldHumidIcon,
  CS: coldDryIcon,
  TH: temperateHumidIcon,
  TS: temperateDryIcon,
  WH: warmHumidIcon,
  WS: warmDryIcon,
  PARAMO: paramoIcon,
};

// ==============================
// Obtención del icono climático
// ==============================

/**
 *
 * Obtiene el icono correspondiente a una clasificación climática.
 *
 * Soporta tanto los códigos simplificados utilizados originalmente
 * por el frontend como los códigos completos generados por el backend.
 *
 * @param {String} climateCode Código de clasificación climática.
 * @returns {String} Ruta del icono correspondiente.
 *
 */

export const getClimateIcon = (climateCode) => {
  // Mantiene compatibilidad con los códigos simplificados
  // utilizados originalmente por el frontend.
  if (CLIMATE_ICON_PRESENTATION[climateCode]) {
    return CLIMATE_ICON_PRESENTATION[climateCode];
  }

  // Clasificaciones del piso térmico frío.
  if (climateCode?.startsWith("COLD_")) {
    return climateCode.includes("DRY") ? coldDryIcon : coldHumidIcon;
  }

  // Clasificaciones del piso térmico templado.
  if (climateCode?.startsWith("TEMPERATE_")) {
    return climateCode.includes("DRY") ? temperateDryIcon : temperateHumidIcon;
  }

  // Clasificaciones del piso térmico cálido.
  if (climateCode?.startsWith("WARM_")) {
    return climateCode.includes("DRY") ? warmDryIcon : warmHumidIcon;
  }

  // Icono utilizado cuando no existe una correspondencia.
  return defaultClimateIcon;
};
