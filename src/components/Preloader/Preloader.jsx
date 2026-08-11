/**
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: Preloader.jsx
 *
 * -----------------------------------------------------------------------------
 * Indicador visual de carga utilizado mientras se procesa
 * una solicitud de análisis climático.
 *
 * Muestra mensajes dinámicos para informar al usuario que
 * el análisis continúa en ejecución.
 *
 * Los mensajes representan de forma general las etapas del
 * procesamiento y no corresponden necesariamente a procesos
 * independientes del backend.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import { useEffect, useState } from "react";

import "./Preloader.css";

// ==============================
// Configuración
// ==============================

const LOADING_MESSAGES = [
  "Analizando las condiciones climáticas...",
  "Procesando la información histórica...",
  "Evaluando las variables del sitio...",
  "Generando recomendaciones de diseño...",
  "Preparando tu análisis bioclimático...",
];

// ==============================
// Componente
// ==============================

function Preloader() {
  const [messageIndex, setMessageIndex] = useState(0);

  // ==============================
  // Cambio de mensaje
  // ==============================

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((currentIndex) => {
        return (currentIndex + 1) % LOADING_MESSAGES.length;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // ==============================
  // Render
  // ==============================

  return (
    <section className="preloader" aria-live="polite">
      <div className="preloader__container">
        <div className="preloader__spinner" aria-hidden="true"></div>

        <h2 className="preloader__title">{LOADING_MESSAGES[messageIndex]}</h2>
      </div>
    </section>
  );
}

export default Preloader;
