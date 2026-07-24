import { useState } from "react";

import "./StrategySection.css";

import StrategyCardList from "../StrategyCardList/StrategyCardList";
import SaveAnalysisSection from "../SaveAnalysisSection/SaveAnalysisSection";
import StrategyNote from "../StrategyNote/StrategyNote";
import StrategyModal from "../StrategyModal/StrategyModal";

function StrategySection({
  strategies,
  isLoggedIn,
  isSaved,
  onSaveAnalysis,
  showSaveAnalysisSection = true,
}) {
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  // Modal functions
  const handleOpenStrategyModal = (strategy) => {
    setSelectedStrategy(strategy);
    setIsStrategyModalOpen(true);
  };

  const handleCloseStrategyModal = () => {
    setIsStrategyModalOpen(false);
    setSelectedStrategy(null);
  };

  return (
    <section className="strategy-section">
      <div className="strategy-section__container">
        <h2 className="strategy-section__title">
          Estrategias de diseño bioclimático
        </h2>

        <p className="strategy-section__description">
          Se muestran las estrategias con mayor impacto para apoyar las primeras
          decisiones de diseño de la ubicación analizada.
        </p>

        <StrategyCardList
          strategies={strategies}
          onOpenModal={handleOpenStrategyModal}
          hasSaveSection={showSaveAnalysisSection}
        />

        {showSaveAnalysisSection && (
          <SaveAnalysisSection
            isLoggedIn={isLoggedIn}
            isSaved={isSaved}
            onSaveAnalysis={onSaveAnalysis}
          />
        )}

        <StrategyNote />

        {isStrategyModalOpen && (
          <StrategyModal
            strategy={selectedStrategy}
            onClose={handleCloseStrategyModal}
          />
        )}
      </div>
    </section>
  );
}

export default StrategySection;
