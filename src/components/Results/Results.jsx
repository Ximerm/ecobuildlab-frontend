import { useState } from "react";

import Hero from "../Hero/Hero";
import ClimateSummary from "../ClimateSummary/ClimateSummary";
import StrategySection from "../StrategySection/StrategySection";

import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";

function Results({ isLoggedIn, handleOpenLoginModal }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveAnalysis = () => {
    setIsSaved(true);
  };

  return (
    <main className="main">
      <Hero />

      <ClimateSummary />

      <StrategySection
        isLoggedIn={isLoggedIn}
        isSaved={isSaved}
        onSaveAnalysis={isLoggedIn ? handleSaveAnalysis : handleOpenLoginModal}
      />
    </main>
  );
}

export default Results;
