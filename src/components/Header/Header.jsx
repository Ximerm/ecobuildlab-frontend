import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn, handleOpenLoginModal, handleLogout }) {
  return (
    <header className="header">
      <div className="header__container">
        <Navigation
          isLoggedIn={isLoggedIn}
          onLoginClick={handleOpenLoginModal}
          onLogout={handleLogout}
        />
      </div>
    </header>
  );
}

export default Header;
