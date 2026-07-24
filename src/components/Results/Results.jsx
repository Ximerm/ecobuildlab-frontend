import { useMemo, useState } from "react";

import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import ClimateSummary from "../ClimateSummary/ClimateSummary";
import StrategySection from "../StrategySection/StrategySection";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";

import { generateStrategies } from "../../utils/strategies/strategyGenerator";

import { createSavedAnalysis } from "../../utils/analysis/createSavedAnalysis";
import { addAnalysis } from "../../utils/storage/analysisStorage";

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
    if (!analysis) return;

    const savedAnalysis = createSavedAnalysis(analysis);

    addAnalysis(savedAnalysis);

    setIsSaved(true);
  };

  const strategies = useMemo(
    () => (analysis ? generateStrategies(analysis) : []),
    [analysis],
  );

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
            strategies={strategies}
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
