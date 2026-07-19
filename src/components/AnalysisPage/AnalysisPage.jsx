import "./AnalysisPage.css";

import ClimateSummary from "../ClimateSummary/ClimateSummary";
import StrategySection from "../StrategySection/StrategySection";

function AnalysisPage() {
  return (
    <main className="analysis-page">
      <div className="analysis-page__container">
        <header className="analysis-page__header">
          <h1 className="analysis-page__title">Detalle del análisis</h1>

          <p className="analysis-page__date">Creado el 17 de julio de 2026</p>
        </header>

        <ClimateSummary />

        <StrategySection showSaveAnalysis={false} />
      </div>
    </main>
  );
}

export default AnalysisPage;
