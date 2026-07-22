import { useParams } from "react-router-dom";

import "./AnalysisPage.css";

import ClimateSummary from "../ClimateSummary/ClimateSummary";
import StrategySection from "../StrategySection/StrategySection";

import { formatDate } from "../../utils/formatDate";
import { generateStrategies } from "../../utils/strategies/strategyGenerator";
import { getAnalysisById } from "../../utils/storage/analysisStorage";

function AnalysisPage() {
  const { id } = useParams();

  const savedAnalysis = getAnalysisById(id);

  if (!savedAnalysis) {
    return (
      <main className="analysis-page">
        <div className="analysis-page__container">
          <h1>Análisis no encontrado</h1>
        </div>
      </main>
    );
  }

  const { analysis, createdAt } = savedAnalysis;

  const strategies = generateStrategies(analysis);

  return (
    <main className="analysis-page">
      <div className="analysis-page__container">
        <header className="analysis-page__header">
          <h1 className="analysis-page__title">Detalle del análisis</h1>

          <p className="analysis-page__date">{formatDate(createdAt)}</p>
        </header>

        <ClimateSummary analysis={analysis} />

        <StrategySection
          strategies={strategies}
          showSaveAnalysisSection={false}
        />
      </div>
    </main>
  );
}

export default AnalysisPage;
