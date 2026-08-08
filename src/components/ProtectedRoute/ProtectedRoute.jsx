/**
 * --------------------------------------------------
 * EcoBuildLab
 * Archivo: ProtectedRoute.jsx
 * --------------------------------------------------
 * Protege las rutas que requieren autenticación.
 *
 * Si el usuario está autenticado, permite acceder
 * a la ruta.
 *
 * Si no está autenticado, redirige al inicio.
 * --------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";

// ==============================
// Componente
// ==============================

function ProtectedRoute() {
  // ==============================
  // Contexto de autenticación
  // ==============================

  const { isLoggedIn, isLoading } = useContext(CurrentUserContext);

  // ==============================
  // Ubicación actual
  // ==============================

  const location = useLocation();

  // ==============================
  // Estado de carga
  // ==============================

  // Mientras se comprueba el JWT almacenado,
  // no redirigimos al usuario.
  if (isLoading) {
    return null;
  }

  // ==============================
  // Protección de la ruta
  // ==============================

  if (!isLoggedIn) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  // ==============================
  // Acceso autorizado
  // ==============================

  return <Outlet />;
}

// ==============================
// Exportaciones
// ==============================

export default ProtectedRoute;
