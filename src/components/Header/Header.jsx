/**
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: Header.jsx
 * -----------------------------------------------------------------------------
 * Encabezado principal de la aplicación.
 *
 * Contiene el componente de navegación y centraliza la comunicación
 * de las acciones principales del encabezado con el componente App.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================
import "./Header.css";

import Navigation from "../Navigation/Navigation";

// ==============================
// Componente
// ==============================

function Header({
  isLoggedIn,
  currentUser,
  handleOpenLoginModal,
  handleLogout,
  onNewAnalysis,
}) {
  return (
    <header className="header">
      <div className="header__container">
        <Navigation
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLoginClick={handleOpenLoginModal}
          onLogout={handleLogout}
          onNewAnalysis={onNewAnalysis}
        />
      </div>
    </header>
  );
}

// ==============================
// Exportaciones
// ==============================

export default Header;
