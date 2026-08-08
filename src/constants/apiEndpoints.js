/**
 * --------------------------------------------------
 * EcoBuildLab
 * Archivo: apiEndpoints.js
 * --------------------------------------------------
 * Endpoints disponibles del backend.
 *
 * Centraliza las rutas utilizadas para comunicarse
 * con la API de EcoBuildLab.
 * --------------------------------------------------
 */

// ==============================
// Constantes
// ==============================

export const API_ENDPOINTS = {
  // Autenticación
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  CURRENT_USER: "/users/me",

  // Análisis bioclimáticos
  GENERATE_ANALYSIS: "/analyses/generate",
  ANALYSES: "/analyses",
};
