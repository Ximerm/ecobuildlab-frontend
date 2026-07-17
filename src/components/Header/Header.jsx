import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ handleOpenLoginModal }) {
  return (
    <header className="header">
      <div className="header__container">
        <Navigation onOpenLogin={handleOpenLoginModal} />
      </div>
    </header>
  );
}

export default Header;
