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

      <NavLink to="/results" className="navigation__link">
        Explorar estrategias
      </NavLink>
    </nav>
  );
}

export default Navigation;
