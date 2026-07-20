import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Results from "../Results/Results";
import SavedAnalysis from "../SavedAnalysis/SavedAnalysis";
import AnalysisPage from "../AnalysisPage/AnalysisPage";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleLogout = () => {
    console.log("Cerrar sesión");
    setIsLoggedIn(false);
  };

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        handleOpenLoginModal={handleOpenLoginModal}
        handleLogout={handleLogout}
      />

      {isLoginOpen && (
        <LoginModal
          onClose={handleCloseLogin}
          onOpenRegister={handleOpenRegisterModal}
        />
      )}

      {isRegisterOpen && (
        <RegisterModal
          onClose={handleCloseRegister}
          onOpenLogin={handleOpenLoginModal}
        />
      )}

      <Routes>
        <Route path="/" element={<Main />} />

        <Route
          path="/results"
          element={
            <Results
              isLoggedIn={isLoggedIn}
              handleOpenLoginModal={handleOpenLoginModal}
            />
          }
        />

        <Route
          path="/saved-analysis"
          element={<SavedAnalysis isLoggedIn={isLoggedIn} />}
        />

        <Route
          path="/analysis/:id"
          element={<AnalysisPage isLoggedIn={isLoggedIn} />}
        />
      </Routes>

      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
