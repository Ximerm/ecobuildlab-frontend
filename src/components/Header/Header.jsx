import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
