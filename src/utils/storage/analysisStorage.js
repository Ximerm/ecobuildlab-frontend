const STORAGE_KEY = "savedAnalyses";

function saveAnalyses(analyses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(analyses));
}

export function getSavedAnalyses() {
  try {
    const savedAnalyses = localStorage.getItem(STORAGE_KEY);

    return savedAnalyses ? JSON.parse(savedAnalyses) : [];
  } catch (error) {
    console.error("Error al leer los análisis guardados:", error);
    return [];
  }
}

export function addAnalysis(savedAnalysis) {
  try {
    const analyses = getSavedAnalyses();

    const updatedAnalyses = [...analyses, savedAnalysis];

    saveAnalyses(updatedAnalyses);

    return updatedAnalyses;
  } catch (error) {
    console.error("Error al agregar el análisis:", error);
    return null;
  }
}

export function getAnalysisById(id) {
  const analyses = getSavedAnalyses();

  return analyses.find((savedAnalysis) => savedAnalysis.id === id) ?? null;
}

export function deleteAnalysis(id) {
  try {
    const analyses = getSavedAnalyses();

    const updatedAnalyses = analyses.filter(
      (savedAnalysis) => savedAnalysis.id !== id,
    );

    saveAnalyses(updatedAnalyses);

    return updatedAnalyses;
  } catch (error) {
    console.error("Error al eliminar el análisis:", error);
    return null;
  }
}

export function clearSavedAnalyses() {
  localStorage.removeItem(STORAGE_KEY);
}
