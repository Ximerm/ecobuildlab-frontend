/**
 * --------------------------------------------------
 * EcoBuildLab
 * Archivo: analysisService.js
 * --------------------------------------------------
 * Servicio encargado de gestionar las operaciones
 * relacionadas con los análisis bioclimáticos.
 *
 * Centraliza la comunicación entre los componentes
 * del frontend y los endpoints de análisis del backend.
 * --------------------------------------------------
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
   * Genera un análisis bioclimático.
   *
   * El backend recibe la ciudad y opcionalmente
   * el país, obtiene los datos climáticos y genera
   * el análisis completo sin almacenarlo.
   *
   * @param {Object} data Datos de ubicación.
   * @returns {Promise<Object>} Análisis generado.
   */
  generateAnalysis(data) {
    return mainApi.post(API_ENDPOINTS.GENERATE_ANALYSIS, data);
  }

  /**
   * Guarda un análisis generado previamente.
   *
   * El backend asocia el análisis con el usuario
   * autenticado.
   *
   * @param {Object} analysis Análisis que se desea guardar.
   * @returns {Promise<Object>} Análisis guardado.
   */
  saveAnalysis(analysis) {
    return mainApi.post(API_ENDPOINTS.ANALYSES, analysis);
  }

  /**
   * Obtiene los análisis guardados del usuario
   * autenticado.
   *
   * @returns {Promise<Array>} Lista de análisis.
   */
  getAnalyses() {
    return mainApi.get(API_ENDPOINTS.ANALYSES);
  }

  /**
   * Obtiene un análisis específico del usuario
   * autenticado.
   *
   * @param {string} id Identificador del análisis.
   * @returns {Promise<Object>} Análisis solicitado.
   */
  getAnalysisById(id) {
    return mainApi.get(`${API_ENDPOINTS.ANALYSES}/${id}`);
  }

  /**
   * Elimina un análisis del usuario autenticado.
   *
   * @param {string} id Identificador del análisis.
   * @returns {Promise<Object>} Respuesta del servidor.
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
