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

import { Routes, Route, useNavigate } from "react-router-dom";

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

  // ==============================
  // Manejadores de modales
  // ==============================

  const handleOpenLoginModal = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
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
  };

  // ==============================
  // Búsqueda de análisis
  // ==============================

  async function handleSearch(location) {
    setError("");
    setAnalysis(null);
    setIsLoading(true);

    navigate("/results");

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
      {isLoginOpen && (
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
      />

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<Main onSearch={handleSearch} />} />

        <Route
          path="/results"
          element={
            <Results
              key={
                analysis
                  ? `${analysis.location.city}-${analysis.location.country}`
                  : "empty"
              }
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
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
