/**
 *
 * ---
 * EcoBuildLab
 *
 * Archivo: Results.jsx
 *
 * ---
 * Componente encargado de mostrar los resultados del análisis climático.
 *
 * Gestiona:
 *
 * - Estado de carga y errores.
 * - Búsqueda de nuevas ubicaciones.
 * - Resumen climático.
 * - Estrategias bioclimáticas.
 * - Guardado de análisis para usuarios autenticados.
 * - Detección de análisis duplicados.
 * - Reemplazo de análisis existentes.
 * - Notificaciones de las operaciones de guardado.
 *
 * ---
 *
 */

// ==============================
// Dependencias
// ==============================

import { useState } from "react";

import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import ClimateSummary from "../ClimateSummary/ClimateSummary";
import StrategySection from "../StrategySection/StrategySection";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import DuplicateAnalysisModal from "../DuplicateAnalysisModal/DuplicateAnalysisModal";

import analysisService from "../../services/analysisService";

// ==============================
// Componente
// ==============================

function Results({
  isLoggedIn,
  handleOpenLoginModal,
  analysis,
  isLoading,
  error,
  onSearch,
}) {
  // ==============================
  // Estado del guardado
  // ==============================

  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  // ==============================
  // Estado del análisis duplicado
  // ==============================

  const [isDuplicateModalOpen, setIsDuplicateModalOpen] = useState(false);
  const [duplicateAnalysisId, setDuplicateAnalysisId] = useState(null);
  const [isReplacing, setIsReplacing] = useState(false);

  // ==============================
  // Estado de la notificación
  // ==============================

  const [notification, setNotification] = useState(null);

  // ==============================
  // Búsqueda de una nueva ubicación
  // ==============================

  const handleSearch = (location) => {
    // Reinicia el estado relacionado con el análisis anterior.
    setIsSaved(false);
    setIsSaving(false);
    setSaveError("");

    // Cierra cualquier modal pendiente de la búsqueda anterior.
    setIsDuplicateModalOpen(false);
    setDuplicateAnalysisId(null);
    setIsReplacing(false);

    // Cierra cualquier notificación anterior.
    setNotification(null);

    // Ejecuta la búsqueda en el componente padre.
    onSearch(location);
  };

  // ==============================
  // Mostrar notificación
  // ==============================

  const showNotification = (title) => {
    setNotification({
      title,
      message: "Disponible en Mis análisis.",
    });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // ==============================
  // Guardar análisis
  // ==============================

  const handleSaveAnalysis = async () => {
    if (!analysis || isSaving || isSaved) {
      return false;
    }

    setIsSaving(true);
    setSaveError("");

    try {
      // Guarda directamente el análisis que ya fue generado
      // y que actualmente se está mostrando en pantalla.
      await analysisService.saveAnalysis(analysis);

      // El análisis se guardó correctamente.
      setIsSaved(true);

      // Muestra la notificación de guardado exitoso.
      showNotification("Análisis guardado");

      return true;
    } catch (error) {
      console.error("Error al guardar el análisis:", error);

      // ==============================
      // Análisis duplicado
      // ==============================

      if (error.status === 409) {
        // Guarda el identificador del análisis existente
        // para utilizarlo si el usuario decide reemplazarlo.
        setDuplicateAnalysisId(error.analysisId);

        // Abre el modal de análisis duplicado.
        setIsDuplicateModalOpen(true);

        return false;
      }

      // ==============================
      // Otros errores
      // ==============================

      setSaveError(error.message || "No se pudo guardar el análisis.");
    } finally {
      setIsSaving(false);
    }
  };

  // ==============================
  // Cerrar modal de duplicado
  // ==============================

  const handleCloseDuplicateModal = () => {
    if (isReplacing) {
      return;
    }

    setIsDuplicateModalOpen(false);
    setDuplicateAnalysisId(null);
  };

  // ==============================
  // Reemplazar análisis existente
  // ==============================

  const handleReplaceAnalysis = async () => {
    if (!analysis || !duplicateAnalysisId || isReplacing) {
      return;
    }

    setIsReplacing(true);
    setSaveError("");

    try {
      // Reemplaza el análisis existente utilizando
      // el identificador proporcionado por el backend.
      await analysisService.replaceAnalysis(duplicateAnalysisId, analysis);

      // El análisis actual queda guardado como
      // la versión más reciente.
      setIsSaved(true);

      // Cierra el modal después de completar
      // correctamente el reemplazo.
      setIsDuplicateModalOpen(false);
      setDuplicateAnalysisId(null);

      // Muestra la notificación correspondiente
      // a la actualización.
      showNotification("Análisis actualizado");
    } catch (error) {
      console.error("Error al reemplazar el análisis:", error);

      setSaveError(error.message || "No se pudo reemplazar el análisis.");
    } finally {
      setIsReplacing(false);
    }
  };

  // ==============================
  // Render
  // ==============================

  return (
    <main className="results">
      <Hero>
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
      </Hero>

      {/* Estado de carga */}
      {isLoading && <Preloader />}

      {/* Estado de error */}
      {error && !isLoading && <NoResults message={error} />}

      {/* Resultados del análisis */}
      {!isLoading && !error && analysis && (
        <>
          <ClimateSummary analysis={analysis} />

          <StrategySection
            strategies={analysis?.strategies ?? []}
            isLoggedIn={isLoggedIn}
            isSaved={isSaved}
            onSaveAnalysis={
              isLoggedIn ? handleSaveAnalysis : handleOpenLoginModal
            }
            notification={notification}
          />

          {/* Error relacionado con el guardado o reemplazo */}
          {saveError && <p className="results__save-error">{saveError}</p>}
        </>
      )}

      {/* Modal para análisis duplicados */}
      {isDuplicateModalOpen && (
        <DuplicateAnalysisModal
          city={analysis?.location?.city}
          country={analysis?.location?.country}
          isReplacing={isReplacing}
          onClose={handleCloseDuplicateModal}
          onReplace={handleReplaceAnalysis}
        />
      )}
    </main>
  );
}

export default Results;
