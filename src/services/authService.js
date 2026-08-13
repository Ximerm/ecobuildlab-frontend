/**
 * --------------------------------------------------
 * EcoBuildLab
 * Archivo: authService.js
 * --------------------------------------------------
 * Servicio de autenticación.
 *
 * Centraliza las operaciones relacionadas con el
 * registro, inicio de sesión y obtención del usuario
 * autenticado.
 * --------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import mainApi from "../utils/api/MainApi";

import { API_ENDPOINTS } from "../constants/apiEndpoints";

import { saveToken } from "../utils/storage/tokenStorage";

// ==============================
// Clase AuthService
// ==============================

class AuthService {
  /**
   * Registra un nuevo usuario.
   *
   * @param {Object} userData
   * @returns {Promise<Object>}
   */
  register(userData) {
    return mainApi.post(API_ENDPOINTS.SIGN_UP, userData);
  }

  /**
   * Inicia sesión.
   *
   * Al autenticarse correctamente,
   * el JWT queda almacenado localmente.
   *
   * @param {Object} credentials
   * @returns {Promise<Object>}
   */
  async login(credentials) {
    const response = await mainApi.post(API_ENDPOINTS.SIGN_IN, credentials);

    saveToken(response.token);

    return response;
  }

  /**
   * Obtiene el usuario autenticado.
   *
   * @returns {Promise<Object>}
   */
  getCurrentUser() {
    return mainApi.get(API_ENDPOINTS.CURRENT_USER);
  }
}

// ==============================
// Exportaciones
// ==============================

const authService = new AuthService();

export default authService;
