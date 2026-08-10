/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 *
 * Archivo: StrategySection.jsx
 *
 * -----------------------------------------------------------------------------
 * Sección que presenta las estrategias de diseño bioclimático recomendadas
 * para la ubicación analizada.
 *
 * Gestiona:
 *
 * • La lista de estrategias recomendadas.
 * • La apertura del detalle de cada estrategia.
 * • La sección para guardar el análisis.
 * • La nota informativa sobre las estrategias.
 * • La notificación relacionada con el guardado del análisis.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { useState } from "react";

import "./StrategySection.css";

import StrategyCardList from "../StrategyCardList/StrategyCardList";
import SaveAnalysisSection from "../SaveAnalysisSection/SaveAnalysisSection";
import StrategyNote from "../StrategyNote/StrategyNote";
import StrategyModal from "../StrategyModal/StrategyModal";

// ==============================
// Componente
// ==============================
function StrategySection({
  strategies,
  isLoggedIn,
  isSaved,
  onSaveAnalysis,
  showSaveAnalysisSection = true,
  notification,
}) {
  // ==============================
  // Estado del modal de estrategia
  // ==============================
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  // ==============================
  // Abrir modal de estrategia
  // ==============================

  const handleOpenStrategyModal = (strategy) => {
    setSelectedStrategy(strategy);
    setIsStrategyModalOpen(true);
  };

  // ==============================
  // Cerrar modal de estrategia
  // ==============================

  const handleCloseStrategyModal = () => {
    setIsStrategyModalOpen(false);
    setSelectedStrategy(null);
  };

  // ==============================
  // Render
  // ==============================

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
            notification={notification}
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
