/**
 * --------------------------------------------------
 * EcoBuildLab
 * Archivo: App.jsx
 * --------------------------------------------------
 * Componente raíz de la aplicación.
 *
 * Gestiona la navegación principal, los modales de
 * autenticación y el flujo de búsqueda de análisis
 * bioclimáticos.
 *
 * El estado de autenticación se obtiene desde
 * CurrentUserContext.
 * --------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import "./App.css";

import { useContext, useState } from "react";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Results from "../Results/Results";
import SavedAnalysis from "../SavedAnalysis/SavedAnalysis";
import AnalysisPage from "../AnalysisPage/AnalysisPage";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import analysisService from "../../services/analysisService";

import ScrollToTop from "../ScrollToTop/ScrollToTop";

// ==============================
// Componente
// ==============================

function App() {
  // ==============================
  // Contexto de autenticación
  // ==============================

  const { currentUser, isLoggedIn, logout } = useContext(CurrentUserContext);

  // ==============================
  // Estados de interfaz
  // ==============================

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // ==============================
  // Navegación
  // ==============================

  const navigate = useNavigate();
  const location = useLocation();

  // ==============================
  // Navegación al buscador
  // ==============================

  const handleNewAnalysis = () => {
    const scrollToSearch = () => {
      const targetId =
        window.innerWidth <= 768 ? "search-mobile" : "search-desktop";

      const searchElement = document.getElementById(targetId);

      if (!searchElement) {
        return;
      }

      searchElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      const searchInput = searchElement.querySelector(".search-form__input");

      if (searchInput) {
        setTimeout(() => {
          searchInput.focus();
        }, 500);
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSearch, 100);
      return;
    }

    scrollToSearch();
  };

  // ==============================
  // Manejadores de modales
  // ==============================

  const handleOpenLoginModal = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);

    if (location.state?.requireAuth) {
      navigate("/", {
        replace: true,
        state: null,
      });
    }
  };

  const handleOpenRegisterModal = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  // ==============================
  // Autenticación
  // ==============================

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  // ==============================
  // Búsqueda de análisis
  // ==============================

  async function handleSearch(location) {
    setError("");
    setAnalysis(null);
    setIsLoading(true);

    navigate("/results");

    setTimeout(() => {
      const preloader = document.getElementById("analysis-preloader");

      if (preloader) {
        preloader.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    try {
      const climateAnalysis = await analysisService.generateAnalysis(location);

      setAnalysis(climateAnalysis);
    } catch (err) {
      console.error(err);
      setError(err.message || "No fue posible generar el análisis.");
    } finally {
      setIsLoading(false);
    }
  }

  // ==============================
  // Render
  // ==============================

  return (
    <div className="app">
      {/* Modal de inicio de sesión */}
      {(isLoginOpen || location.state?.requireAuth) && (
        <LoginModal
          onClose={handleCloseLogin}
          onOpenRegister={handleOpenRegisterModal}
        />
      )}

      {/* Modal de registro */}
      {isRegisterOpen && (
        <RegisterModal
          onClose={handleCloseRegister}
          onOpenLogin={handleOpenLoginModal}
        />
      )}

      {/* Navegación principal */}
      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        handleOpenLoginModal={handleOpenLoginModal}
        handleLogout={handleLogout}
        onNewAnalysis={handleNewAnalysis}
      />

      <ScrollToTop />

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<Main onSearch={handleSearch} />} />

        <Route
          path="/results"
          element={
            <Results
              isLoggedIn={isLoggedIn}
              handleOpenLoginModal={handleOpenLoginModal}
              analysis={analysis}
              isLoading={isLoading}
              error={error}
              onSearch={handleSearch}
            />
          }
        />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/saved-analysis"
            element={<SavedAnalysis isLoggedIn={isLoggedIn} />}
          />

          <Route
            path="/analysis/:id"
            element={<AnalysisPage isLoggedIn={isLoggedIn} />}
          />
        </Route>
      </Routes>

      {/* Pie de página */}
      <Footer isLoggedIn={isLoggedIn} onNewAnalysis={handleNewAnalysis} />
    </div>
  );
}

export default App;
