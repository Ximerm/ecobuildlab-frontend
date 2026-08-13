/**
 * --------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: AnalysisPage.jsx
 * --------------------------------------------------------------------
 * Página de detalle de un análisis bioclimático guardado.
 *
 * Obtiene el análisis desde el backend utilizando el identificador
 * incluido en la URL.
 *
 * Permite consultar:
 * - Fecha del análisis
 * - Indicadores climáticos
 * - Estrategias bioclimáticas
 * --------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "./AnalysisPage.css";

import ClimateSummary from "../ClimateSummary/ClimateSummary";
import StrategySection from "../StrategySection/StrategySection";
import Preloader from "../Preloader/Preloader";

import { formatDate } from "../../utils/formatDate";

import analysisService from "../../services/analysisService";

// ==============================
// Componente
// ==============================

function AnalysisPage() {
  const { id } = useParams();

  // ==============================
  // Estado
  // ==============================

  const [savedAnalysis, setSavedAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // ==============================
  // Obtener análisis
  // ==============================

  useEffect(() => {
    let isMounted = true;

    async function fetchAnalysis() {
      setIsLoading(true);
      setError("");

      try {
        const analysis = await analysisService.getAnalysisById(id);

        if (isMounted) {
          setSavedAnalysis(analysis);
        }
      } catch (error) {
        console.error("Error al obtener el análisis:", error);

        if (isMounted) {
          setError(error.message || "No fue posible obtener el análisis.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchAnalysis();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // ==============================
  // Estados de carga y error
  // ==============================

  if (isLoading) {
    return <Preloader message="Cargando análisis guardado..." />;
  }

  if (error || !savedAnalysis) {
    return (
      <main className="analysis-page">
        <div className="analysis-page__container">
          <h1>Análisis no encontrado</h1>
        </div>
      </main>
    );
  }

  // ==============================
  // Datos del análisis
  // ==============================

  const {
    statistics,
    monthly,
    classification,
    windRose,
    strategies,
    createdAt,
    location,
    units,
  } = savedAnalysis;

  const analysis = {
    statistics,
    monthly,
    classification,
    windRose,
    location,
    units,
  };

  // ==============================
  // Render
  // ==============================

  return (
    <main className="analysis-page">
      <div className="analysis-page__container">
        <header className="analysis-page__header">
          <h1>Detalle del análisis</h1>

          <p className="analysis-page__date">{formatDate(createdAt)}</p>
        </header>

        <ClimateSummary analysis={analysis} />

        <StrategySection
          strategies={strategies || []}
          showSaveAnalysisSection={false}
        />
      </div>
    </main>
  );
}

export default AnalysisPage;
