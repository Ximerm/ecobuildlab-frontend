/**
 *
 * ---
 * EcoBuildLab
 * Archivo: SavedAnalysis.jsx
 *
 * ---
 * Página que muestra los análisis bioclimáticos guardados
 * por el usuario autenticado.
 *
 * Obtiene los análisis desde el backend y adapta la información
 * recibida al formato utilizado por las tarjetas de análisis.
 *
 * También gestiona la selección de un análisis para eliminarlo
 * y la confirmación de dicha operación.
 *
 * ---
 *
 */

// ==============================
// Dependencias
// ==============================

import { useContext, useEffect, useState } from "react";

import "./SavedAnalysis.css";

import SavedAnalysisHeader from "../SavedAnalysisHeader/SavedAnalysisHeader";
import AnalysisCardList from "../AnalysisCardList/AnalysisCardList";
import DeleteAnalysisModal from "../DeleteAnalysisModal/DeleteAnalysisModal";

import analysisService from "../../services/analysisService";

import CurrentUserContext from "../../contexts/CurrentUserContext";

// ==============================
// Componente
// ==============================

function SavedAnalysis() {
  // ==============================
  // Contexto de autenticación
  // ==============================

  const { currentUser } = useContext(CurrentUserContext);

  // ==============================
  // Estado de los análisis
  // ==============================

  const [savedAnalyses, setSavedAnalyses] = useState([]);
  const [error, setError] = useState("");

  // ==============================
  // Estado del borrado
  // ==============================

  const [selectedAnalysis, setSelectedAnalysis] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // ==============================
  // Efectos
  // ==============================

  useEffect(() => {
    const loadSavedAnalyses = async () => {
      try {
        // Limpia cualquier error anterior antes
        // de solicitar nuevamente los análisis.
        setError("");

        // Obtiene los análisis guardados del usuario
        // desde el backend.
        const analyses = await analysisService.getAnalyses();

        // Adapta la estructura del backend al formato
        // que utilizan AnalysisCardList y AnalysisCard.
        const formattedAnalyses = analyses.map((savedAnalysis) => ({
          id: savedAnalysis._id,
          updatedAt: savedAnalysis.updatedAt,

          analysis: {
            city: savedAnalysis.location.city,
            country: savedAnalysis.location.country,

            climate: {
              code: savedAnalysis.classification.code,
              name: savedAnalysis.classification.name,
            },

            strategies: savedAnalysis.strategies || [],
          },
        }));

        setSavedAnalyses(formattedAnalyses);
      } catch (error) {
        console.error("Error al obtener los análisis guardados:", error);

        // Informa al usuario cuando no es posible
        // cargar sus análisis guardados.
        setError(
          error.message || "No fue posible cargar tus análisis guardados.",
        );
      }
    };

    loadSavedAnalyses();
  }, []);

  // ==============================
  // Abrir modal de eliminación
  // ==============================

  const handleOpenDeleteModal = (analysis) => {
    setError("");
    setSelectedAnalysis(analysis);
  };

  // ==============================
  // Cerrar modal de eliminación
  // ==============================

  const handleCloseDeleteModal = () => {
    if (isDeleting) {
      return;
    }

    setSelectedAnalysis(null);
  };

  // ==============================
  // Eliminar análisis
  // ==============================

  const handleDeleteAnalysis = async () => {
    if (!selectedAnalysis || isDeleting) {
      return;
    }

    setIsDeleting(true);
    setError("");

    try {
      // Elimina el análisis seleccionado
      // desde la base de datos.
      await analysisService.deleteAnalysis(selectedAnalysis.id);

      // Actualiza la lista local para eliminar
      // inmediatamente la tarjeta sin recargar la página.
      setSavedAnalyses((currentAnalyses) =>
        currentAnalyses.filter(
          (analysis) => analysis.id !== selectedAnalysis.id,
        ),
      );

      // Cierra el modal después de eliminar correctamente.
      setSelectedAnalysis(null);
    } catch (error) {
      console.error("Error al eliminar el análisis:", error);

      // Informa al usuario cuando no es posible
      // eliminar el análisis seleccionado.
      setError(error.message || "No fue posible eliminar el análisis.");
    } finally {
      setIsDeleting(false);
    }
  };

  // ==============================
  // Render
  // ==============================

  return (
    <main className="saved-analysis">
      <div className="saved-analysis__container">
        {error && (
          <p className="saved-analysis__error" role="alert">
            {error}
          </p>
        )}

        <SavedAnalysisHeader
          userName={currentUser?.name || ""}
          analyses={savedAnalyses}
        />

        <AnalysisCardList
          analyses={savedAnalyses}
          onDelete={handleOpenDeleteModal}
        />
      </div>

      {selectedAnalysis && (
        <DeleteAnalysisModal
          city={selectedAnalysis.analysis.city}
          country={selectedAnalysis.analysis.country}
          isDeleting={isDeleting}
          onClose={handleCloseDeleteModal}
          onDelete={handleDeleteAnalysis}
        />
      )}
    </main>
  );
}

export default SavedAnalysis;
