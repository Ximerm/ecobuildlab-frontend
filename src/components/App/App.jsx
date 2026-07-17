import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Results from "../Results/Results";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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

  return (
    <>
      <div className="page">
        <Header handleOpenLoginModal={handleOpenLoginModal} />

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
            element={<Results handleOpenLoginModal={handleOpenLoginModal} />}
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
