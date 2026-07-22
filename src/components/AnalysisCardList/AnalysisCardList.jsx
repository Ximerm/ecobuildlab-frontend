import "./AnalysisCardList.css";

import { useNavigate } from "react-router-dom";

import AnalysisCard from "../AnalysisCard/AnalysisCard";

function AnalysisCardList({ analyses }) {
  const navigate = useNavigate();

  return (
    <section className="analysis-card-list">
      <div className="analysis-card-list__content">
        <h2 className="analysis-card-list__title">Mis Análisis</h2>

        <p className="analysis-card-list__description">
          Selecciona un análisis para revisar los indicadores analizados y las
          estrategias recomendadas.
        </p>

        <div className="analysis-card-list__grid">
          {analyses.map((savedAnalysis) => (
            <AnalysisCard
              key={savedAnalysis.id}
              savedAnalysis={savedAnalysis}
              onClick={() => navigate(`/analysis/${savedAnalysis.id}`)}
              onDelete={() => console.log("Eliminar")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnalysisCardList;
