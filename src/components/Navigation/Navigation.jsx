import "./Navigation.css";

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../../images/logo.png";
import logoutDarkIcon from "../../images/logout-dark.svg";
import logoutLightIcon from "../../images/logout-light.svg";
import menuIcon from "../../images/icons/menu.svg";
import closeIconDark from "../../images/icons/closedark.svg";

function Navigation({
  isLoggedIn,
  onLoginClick,
  onLogout,
  userName = "Ximena",
}) {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSavedAnalysisPage = location.pathname === "/saved-analysis";

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogin = () => {
    closeMenu();
    onLoginClick();
  };

  const handleLogout = () => {
    closeMenu();
    onLogout();
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

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

  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__logo" onClick={closeMenu}>
        <img src={logo} alt="EcoBuildLab" className="navigation__logo-image" />
      </NavLink>

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

      {isMenuOpen && (
        <div className="navigation__overlay" onClick={closeMenu} />
      )}

      <div
        id="mobile-menu"
        className={`navigation__actions ${
          isMenuOpen ? "navigation__actions--open" : ""
        }`}
      >
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
              alt=""
              aria-hidden="true"
              className="navigation__close-icon"
            />
          </button>
        </div>

        {isLoggedIn ? (
          <>
            {isSavedAnalysisPage ? (
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navigation__link ${
                    isActive ? "navigation__link--active" : ""
                  }`
                }
              >
                Nuevo análisis
              </NavLink>
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

export default Navigation;
