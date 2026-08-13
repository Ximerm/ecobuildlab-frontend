/**
 * --------------------------------------------------
 * EcoBuildLab
 * Archivo: tokenStorage.js
 * --------------------------------------------------
 * Utilidades para almacenar el token JWT.
 *
 * Centraliza el acceso al almacenamiento local
 * evitando el uso directo de localStorage en el
 * resto de la aplicación.
 * --------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { TOKEN_KEY } from "../../constants/storage";

// ==============================
// Funciones públicas
// ==============================

/**
 * Guarda el token JWT.
 *
 * @param {string} token
 */
export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

/**
 * Obtiene el token almacenado.
 *
 * @returns {string|null}
 */
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

/**
 * Elimina el token almacenado.
 */
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}
