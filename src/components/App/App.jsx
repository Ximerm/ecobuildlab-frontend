import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Results from "../Results/Results";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/results" element={<Results />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
