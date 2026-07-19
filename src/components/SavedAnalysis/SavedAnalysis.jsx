import "./SavedAnalysis.css";

import SavedAnalysisHeader from "../SavedAnalysisHeader/SavedAnalysisHeader";
import AnalysisCardList from "../AnalysisCardList/AnalysisCardList";

const locations = [
  "Pasto",
  "Bogotá",
  "Medellín",
  "Villa de Leyva",
  "Cartagena",
  "La Guajira",
  "Páramo de Sumapaz",
];

function SavedAnalysis() {
  return (
    <main className="saved-analysis">
      <div className="saved-analysis__container">
        <SavedAnalysisHeader
          userName="Ximena"
          analysisCount={locations.length}
          locations={locations}
        />
        <AnalysisCardList />
      </div>
    </main>
  );
}

export default SavedAnalysis;
