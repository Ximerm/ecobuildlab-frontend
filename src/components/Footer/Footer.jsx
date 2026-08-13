/**
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: Footer.jsx
 * -----------------------------------------------------------------------------
 * Pie de página de la aplicación.
 *
 * Contiene los enlaces de navegación principales y los enlaces
 * a los perfiles y medios de contacto de EcoBuildLab.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import "./Footer.css";

import { NavLink, useLocation } from "react-router-dom";

// ==============================
// Recursos gráficos
// ==============================

import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/linkedin.svg";
import emailIcon from "../../images/email.svg";

// ==============================
// Componente
// ==============================

function Footer({ isLoggedIn, onNewAnalysis }) {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          <span className="footer__year">&copy; 2026</span>{" "}
          <span className="footer__brand">Eco</span>
          <span className="footer__brand-dark">Build</span>
          <span className="footer__brand">Lab</span>
        </p>

        <div className="footer__top">
          <nav className="footer__navigation">
            <NavLink
              className="footer__nav-link"
              to="/"
              onClick={handleHomeClick}
            >
              Inicio
            </NavLink>

            <button
              type="button"
              className="footer__nav-link footer__nav-button"
              onClick={onNewAnalysis}
            >
              Nuevo análisis
            </button>

            {isLoggedIn && (
              <NavLink className="footer__nav-link" to="/saved-analysis">
                Mis análisis
              </NavLink>
            )}
          </nav>

          <div className="footer__social">
            <a
              className="footer__social-link"
              href="mailto:arq.xrm@gmail.com"
              aria-label="Correo"
            >
              <img src={emailIcon} alt="Correo" className="footer__icon" />
            </a>

            <a
              className="footer__social-link"
              href="https://github.com/Ximerm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="GitHub" className="footer__icon" />
            </a>

            <a
              className="footer__social-link"
              href="https://www.linkedin.com/in/arqximenarm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="footer__icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==============================
// Exportaciones
// ==============================

export default Footer;
