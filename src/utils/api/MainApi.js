/**
 *
  ---
- EcoBuildLab
- Archivo: MainApi.js
  ---
- Cliente HTTP principal de la aplicación.
-
- Centraliza toda la comunicación entre el frontend
- y la API de EcoBuildLab utilizando Fetch.
-
- Todos los servicios de la aplicación delegan en
- esta clase la comunicación con el servidor.
  ---
 */

// ==============================
// Dependencias
// ==============================

import { getToken } from "../storage/tokenStorage";

// ==============================
// Constantes
// ==============================

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

// ==============================
// Clase MainApi
// ==============================

class MainApi {
  /**
   *
   * Crea una nueva instancia del cliente HTTP.
   *
   * @param {string} baseUrl URL base de la API.
   * @param {Object} headers Encabezados por defecto.
   */
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /**
   *
   * Construye los encabezados de la solicitud.
   *
   * Agrega automáticamente el token JWT cuando
   * existe un usuario autenticado.
   *
   * @param {Object} customHeaders
   * @returns {Object}
   */
  buildHeaders(customHeaders = {}) {
    const headers = {
      ...this._headers,
      ...customHeaders,
    };

    const token = getToken();

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }

  /**
   *
   * Procesa una respuesta HTTP.
   *
   * Convierte la respuesta a JSON cuando la solicitud
   * es exitosa o lanza un Error cuando falla.
   *
   * Cuando existe información adicional en la respuesta
   * de error, como el identificador de un análisis duplicado,
   * esta información se conserva en el objeto Error.
   *
   * @param {Response} response
   * @returns {Promise}
   */
  async handleResponse(response) {
    if (!response.ok) {
      let errorData = {};
      let errorMessage = `Error ${response.status}`;

      try {
        errorData = await response.json();

        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch {
        // Si la respuesta no contiene JSON,
        // se conserva el mensaje por defecto.
      }

      const error = new Error(errorMessage);

      error.status = response.status;

      if (errorData.analysisId) {
        error.analysisId = errorData.analysisId;
      }

      throw error;
    }

    return response.json();
  }

  /**
   *
   * Ejecuta una solicitud HTTP al backend.
   *
   * @param {string} endpoint Ruta relativa de la API.
   * @param {Object} options Configuración de Fetch.
   * @returns {Promise}
   */
  async request(endpoint, options = {}) {
    const response = await fetch(`${this._baseUrl}${endpoint}`, {
      ...options,
      headers: this.buildHeaders(options.headers),
    });

    return this.handleResponse(response);
  }

  /**
   *
   * Realiza una solicitud GET.
   *
   * @param {string} endpoint
   * @returns {Promise}
   */
  get(endpoint) {
    return this.request(endpoint, {
      method: "GET",
    });
  }

  /**
   *
   * Realiza una solicitud POST.
   *
   * @param {string} endpoint
   * @param {Object} data
   * @returns {Promise}
   */
  post(endpoint, data) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  /**
   *
   * Realiza una solicitud PUT.
   *
   * @param {string} endpoint
   * @param {Object} data
   * @returns {Promise}
   */
  put(endpoint, data) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  /**
   *
   * Realiza una solicitud PATCH.
   *
   * @param {string} endpoint
   * @param {Object} data
   * @returns {Promise}
   */
  patch(endpoint, data) {
    return this.request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  /**
   *
   * Realiza una solicitud DELETE.
   *
   * @param {string} endpoint
   * @returns {Promise}
   */
  delete(endpoint) {
    return this.request(endpoint, {
      method: "DELETE",
    });
  }
}

// ==============================
// Exportaciones
// ==============================

const mainApi = new MainApi(API_BASE_URL, DEFAULT_HEADERS);

export default mainApi;
