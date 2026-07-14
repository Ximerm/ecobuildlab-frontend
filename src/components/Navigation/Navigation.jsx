import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

function Navigation() {
  return (
    <nav className="navigation">
      <img
        src={logo}
        alt="Logo EcoBuildLab"
        className="navigation__logo-image"
      />
      <div className="navigation__menu">
        <NavLink to="/results" className="navigation__link">
          Explorar estrategias
        </NavLink>

        <NavLink to="/signin" className="navigation__login">
          Iniciar sesión
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
