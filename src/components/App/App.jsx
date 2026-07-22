import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Results from "../Results/Results";
import SavedAnalysis from "../SavedAnalysis/SavedAnalysis";
import AnalysisPage from "../AnalysisPage/AnalysisPage";

import { getClimateAnalysisData } from "../../utils/climate/climateApi";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

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

  async function handleSearch(city) {
    setError("");
    setIsLoading(true);

    navigate("/results");

    try {
      const analysis = await getClimateAnalysisData(city);

      setAnalysis(analysis);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

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
        <Route path="/" element={<Main onSearch={handleSearch} />} />

        <Route
          path="/results"
          element={
            <Results
              key={analysis?.location?.name ?? "empty"}
              isLoggedIn={isLoggedIn}
              handleOpenLoginModal={handleOpenLoginModal}
              analysis={analysis}
              isLoading={isLoading}
              error={error}
              onSearch={handleSearch}
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
