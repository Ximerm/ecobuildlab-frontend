import { useState } from "react";

import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import ClimateSummary from "../ClimateSummary/ClimateSummary";
import StrategySection from "../StrategySection/StrategySection";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";

function Results({
  isLoggedIn,
  handleOpenLoginModal,
  analysis,
  isLoading,
  error,
  onSearch,
}) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveAnalysis = () => {
    setIsSaved(true);
  };

  return (
    <main className="main">
      <Hero>
        <SearchForm onSearch={onSearch} />
      </Hero>

      {isLoading && <Preloader />}

      {error && <NoResults message={error} />}

      {analysis && (
        <>
          <ClimateSummary analysis={analysis} />

          <StrategySection
            isLoggedIn={isLoggedIn}
            isSaved={isSaved}
            onSaveAnalysis={
              isLoggedIn ? handleSaveAnalysis : handleOpenLoginModal
            }
          />
        </>
      )}
    </main>
  );
}

export default Results;
