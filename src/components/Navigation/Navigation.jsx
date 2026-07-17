import "./Navigation.css";

import { NavLink } from "react-router-dom";

import logo from "../../images/logo.png";

function Navigation({ onOpenLogin }) {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__logo">
        <img
          src={logo}
          alt="Logo EcoBuildLab"
          className="navigation__logo-image"
        />
      </NavLink>

      <button type="button" className="navigation__login" onClick={onOpenLogin}>
        Iniciar sesión
      </button>
    </nav>
  );
}

export default Navigation;
