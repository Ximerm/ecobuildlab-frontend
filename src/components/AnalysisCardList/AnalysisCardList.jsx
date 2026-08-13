/**
 *
  ---
- EcoBuildLab
- Archivo: AnalysisCardList.jsx
-
  ---
- Lista de análisis bioclimáticos guardados.
-
- Permite acceder al detalle de cada análisis
- y solicitar la eliminación de un análisis.
-
  ---
*
*/

// ==============================
// Dependencias
// ==============================

import "./AnalysisCardList.css";

import { useNavigate } from "react-router-dom";

import AnalysisCard from "../AnalysisCard/AnalysisCard";

// ==============================
// Componente
// ==============================

function AnalysisCardList({ analyses, onDelete }) {
  const navigate = useNavigate();

  // ==============================
  // Render
  // ==============================
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
              onDelete={() => onDelete(savedAnalysis)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnalysisCardList;
