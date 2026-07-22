import "./SavedAnalysis.css";

import { useMemo } from "react";

import SavedAnalysisHeader from "../SavedAnalysisHeader/SavedAnalysisHeader";
import AnalysisCardList from "../AnalysisCardList/AnalysisCardList";

import { getSavedAnalyses } from "../../utils/storage/analysisStorage";

function SavedAnalysis() {
  const savedAnalyses = useMemo(() => getSavedAnalyses(), []);

  return (
    <main className="saved-analysis">
      <div className="saved-analysis__container">
        <SavedAnalysisHeader userName="Ximena" analyses={savedAnalyses} />

        <AnalysisCardList analyses={savedAnalyses} />
      </div>
    </main>
  );
}

export default SavedAnalysis;
