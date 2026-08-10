/**
 *
 * ---
 * EcoBuildLab
 * Archivo: analysisService.js
 *
 * ---
 * Servicio encargado de gestionar las operaciones
 * relacionadas con los análisis bioclimáticos.
 *
 * Centraliza la comunicación entre los componentes
 * del frontend y los endpoints de análisis del backend.
 *
 * ---
 *
 */

// ==============================
// Dependencias
// ==============================

import mainApi from "../utils/api/MainApi";

import { API_ENDPOINTS } from "../constants/apiEndpoints";

// ==============================
// Clase AnalysisService
// ==============================

class AnalysisService {
  /**
   *
   * Genera un análisis bioclimático.
   *
   * El análisis se genera para el usuario autenticado,
   * pero el backend no lo almacena automáticamente.
   *
   * @param {Object} analysisData Datos necesarios para generar el análisis.
   * @returns {Promise}
   */
  generateAnalysis(analysisData) {
    return mainApi.post(API_ENDPOINTS.GENERATE_ANALYSIS, analysisData);
  }

  /**
   *
   * Guarda un análisis generado previamente.
   *
   * El backend lo asocia automáticamente al usuario
   * autenticado mediante el JWT.
   *
   * @param {Object} analysis Datos del análisis.
   * @returns {Promise}
   */
  saveAnalysis(analysis) {
    return mainApi.post(API_ENDPOINTS.ANALYSES, analysis);
  }

  /**
   *
   * Reemplaza un análisis guardado previamente.
   *
   * El backend actualiza el análisis existente
   * perteneciente al usuario autenticado.
   *
   * @param {string} id Identificador del análisis existente.
   * @param {Object} analysis Nuevos datos del análisis.
   * @returns {Promise}
   */
  replaceAnalysis(id, analysis) {
    return mainApi.patch(`${API_ENDPOINTS.ANALYSES}/${id}`, analysis);
  }

  /**
   *
   * Obtiene todos los análisis guardados
   * del usuario autenticado.
   *
   * @returns {Promise}
   */
  getAnalyses() {
    return mainApi.get(API_ENDPOINTS.ANALYSES);
  }

  /**
   *
   * Obtiene un análisis guardado por su identificador.
   *
   * @param {string} id Identificador del análisis.
   * @returns {Promise}
   */
  getAnalysisById(id) {
    return mainApi.get(`${API_ENDPOINTS.ANALYSES}/${id}`);
  }

  /**
   *
   * Elimina un análisis guardado.
   *
   * @param {string} id Identificador del análisis.
   * @returns {Promise}
   */
  deleteAnalysis(id) {
    return mainApi.delete(`${API_ENDPOINTS.ANALYSES}/${id}`);
  }
}

// ==============================
// Exportaciones
// ==============================

const analysisService = new AnalysisService();

export default analysisService;
