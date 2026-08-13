/**
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: CurrentUserContext.jsx
 * -----------------------------------------------------------------------------
 * Contexto global del usuario autenticado.
 *
 * Centraliza el estado de autenticación de la aplicación
 * y permite compartir la información del usuario entre
 * los diferentes componentes sin prop drilling.
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { createContext, useEffect, useState } from "react";

import authService from "../services/authService";

import { getToken, removeToken } from "../utils/storage/tokenStorage";

// ==============================
// Contexto
// ==============================

const CurrentUserContext = createContext(null);

// ==============================
// Provider
// ==============================

export function CurrentUserProvider({ children }) {
  // ==============================
  // Estados
  // ==============================

  const [currentUser, setCurrentUser] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Boolean(getToken());
  });

  const [isLoading, setIsLoading] = useState(() => {
    return Boolean(getToken());
  });

  // ==============================
  // Recuperación de la sesión
  // ==============================

  useEffect(() => {
    const token = getToken();

    // Si no existe JWT, no hay sesión que recuperar.
    if (!token) {
      return;
    }

    let isMounted = true;

    const loadCurrentUser = async () => {
      try {
        const user = await authService.getCurrentUser();

        if (!isMounted) {
          return;
        }

        setCurrentUser(user);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("No se pudo recuperar el usuario autenticado:", error);

        if (!isMounted) {
          return;
        }

        // El token ya no es válido o la sesión expiró.
        removeToken();

        setCurrentUser(null);
        setIsLoggedIn(false);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadCurrentUser();

    return () => {
      isMounted = false;
    };
  }, []);

  // ==============================
  // Iniciar sesión
  // ==============================

  const login = async (credentials) => {
    setIsLoading(true);

    try {
      await authService.login(credentials);

      const user = await authService.getCurrentUser();

      setCurrentUser(user);
      setIsLoggedIn(true);

      return user;
    } catch (error) {
      removeToken();
      setCurrentUser(null);
      setIsLoggedIn(false);

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // ==============================
  // Cerrar sesión
  // ==============================

  const logout = () => {
    removeToken();

    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  // ==============================
  // Valores del contexto
  // ==============================

  const contextValue = {
    currentUser,
    isLoggedIn,
    isLoading,
    login,
    logout,
  };

  // ==============================
  // Render
  // ==============================

  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
}

// ==============================
// Exportaciones
// ==============================

export default CurrentUserContext;
