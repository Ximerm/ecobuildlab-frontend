import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__logo">
        EcoBuildLab
      </NavLink>

      <NavLink to="/results" className="navigation__link">
        Explorar estrategias
      </NavLink>
    </nav>
  );
}

export default Navigation;
