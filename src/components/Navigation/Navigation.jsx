/**
 * --------------------------------------------------
 * EcoBuildLab
 * Archivo: Navigation.jsx
 * --------------------------------------------------
 * Navegación principal de la aplicación.
 *
 * Gestiona:
 * - Navegación entre las páginas principales.
 * - Menú responsive.
 * - Inicio de sesión.
 * - Información del usuario autenticado.
 * - Cierre de sesión.
 * --------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom";

// ==============================
// Estilos
// ==============================

import "./Navigation.css";

// ==============================
// Recursos gráficos
// ==============================

import logo from "../../images/logo.png";

import logoutDarkIcon from "../../images/logout-dark.svg";
import logoutLightIcon from "../../images/logout-light.svg";

import menuIcon from "../../images/icons/menu.svg";
import closeIconDark from "../../images/icons/closedark.svg";

// ==============================
// Componente
// ==============================

function Navigation({
  isLoggedIn,
  currentUser,
  onLoginClick,
  onLogout,
  onNewAnalysis,
}) {
  // ==============================
  // Ubicación actual
  // ==============================

  const location = useLocation();

  // ==============================
  // Estado del menú móvil
  // ==============================

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ==============================
  // Estado de navegación
  // ==============================

  const isSavedAnalysisPage = location.pathname === "/saved-analysis";

  // ==============================
  // Información del usuario
  // ==============================

  // El nombre se obtiene del usuario autenticado.
  // Se mantiene "Usuario" como valor de respaldo
  // mientras se carga o si el backend no devuelve
  // un nombre.
  const userName = currentUser?.name || currentUser?.username || "Usuario";

  // ==============================
  // Cerrar menú
  // ==============================

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // ==============================
  // Inicio de sesión
  // ==============================

  const handleLogin = () => {
    closeMenu();
    onLoginClick();
  };

  // ==============================
  // Cierre de sesión
  // ==============================

  const handleLogout = () => {
    closeMenu();
    onLogout();
  };

  // ==============================
  // Bloqueo del scroll
  // ==============================

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // ==============================
  // Cerrar menú con Escape
  // ==============================

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen]);

  // ==============================
  // Render
  // ==============================

  return (
    <nav className="navigation">
      {/* ============================
          Logo
          ============================ */}

      <NavLink to="/" className="navigation__logo" onClick={closeMenu}>
        <img src={logo} alt="EcoBuildLab" className="navigation__logo-image" />
      </NavLink>

      {/* ============================
          Botón menú móvil
          ============================ */}

      <button
        type="button"
        className="navigation__menu-button"
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <img
          src={menuIcon}
          alt="Menú"
          aria-hidden="true"
          className="navigation__menu-icon"
        />
      </button>

      {/* ============================
          Overlay del menú móvil
          ============================ */}

      {isMenuOpen && (
        <div className="navigation__overlay" onClick={closeMenu} />
      )}

      {/* ============================
          Acciones de navegación
          ============================ */}

      <div
        id="mobile-menu"
        className={`navigation__actions ${
          isMenuOpen ? "navigation__actions--open" : ""
        }`}
      >
        {/* ============================
            Cabecera del menú móvil
            ============================ */}

        <div className="navigation__mobile-header">
          <img
            src={logo}
            alt="EcoBuildLab"
            className="navigation__mobile-logo"
          />

          <button
            type="button"
            className="navigation__close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <img
              src={closeIconDark}
              alt="Cerrar"
              aria-hidden="true"
              className="navigation__close-icon"
            />
          </button>
        </div>

        {/* ============================
            Usuario autenticado
            ============================ */}

        {isLoggedIn ? (
          <>
            {/* ----------------------------
                Navegación de análisis
                ---------------------------- */}

            {isSavedAnalysisPage ? (
              <button
                type="button"
                className="navigation__link"
                onClick={() => {
                  closeMenu();
                  onNewAnalysis();
                }}
              >
                Nuevo análisis
              </button>
            ) : (
              <NavLink
                to="/saved-analysis"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navigation__link ${
                    isActive ? "navigation__link--active" : ""
                  }`
                }
              >
                Mis análisis
              </NavLink>
            )}

            {/* ----------------------------
                Usuario y cerrar sesión
                ---------------------------- */}

            <button
              type="button"
              className="navigation__button"
              onClick={handleLogout}
            >
              <span>{userName}</span>

              <img
                src={logoutDarkIcon}
                alt="Ícono cerrar sesión oscuro"
                aria-hidden="true"
                className="navigation__button-icon navigation__button-icon--dark"
              />

              <img
                src={logoutLightIcon}
                alt="Ícono cerrar sesión claro"
                aria-hidden="true"
                className="navigation__button-icon navigation__button-icon--light"
              />
            </button>
          </>
        ) : (
          /* ============================
             Usuario no autenticado
             ============================ */

          <button
            type="button"
            className="navigation__button"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
}

// ==============================
// Exportaciones
// ==============================

export default Navigation;
