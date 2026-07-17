import "./Navigation.css";

import { NavLink, useLocation } from "react-router-dom";

import logo from "../../images/logo.png";
import logoutDarkIcon from "../../images/logout-dark.svg";
import logoutLightIcon from "../../images/logout-light.svg";

function Navigation({ isLoggedIn, onLoginClick, onLogout }) {
  const location = useLocation();

  const isSavedAnalysisPage = location.pathname === "/saved-analysis";

  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__logo">
        <img
          src={logo}
          alt="Logo EcoBuildLab"
          className="navigation__logo-image"
        />
      </NavLink>

      <div className="navigation__actions">
        {isLoggedIn ? (
          <>
            {isSavedAnalysisPage ? (
              <NavLink
                to="/"
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
              onClick={onLogout}
            >
              <span>Usuario</span>

              <img
                src={logoutDarkIcon}
                alt=""
                aria-hidden="true"
                className="navigation__button-icon navigation__button-icon--dark"
              />

              <img
                src={logoutLightIcon}
                alt=""
                aria-hidden="true"
                className="navigation__button-icon navigation__button-icon--light"
              />
            </button>
          </>
        ) : (
          <button
            type="button"
            className="navigation__button"
            onClick={onLoginClick}
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
