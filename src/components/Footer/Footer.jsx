import "./Footer.css";

import { Link } from "react-router-dom";

import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/linkedin.svg";
import emailIcon from "../../images/email.svg";

function Footer({ isLoggedIn }) {
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
            <Link className="footer__nav-link" to="/">
              Inicio
            </Link>

            <Link className="footer__nav-link" to="/">
              Nuevo análisis
            </Link>

            {isLoggedIn && (
              <Link className="footer__nav-link" to="/saved-analysis">
                Mis análisis
              </Link>
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

export default Footer;
