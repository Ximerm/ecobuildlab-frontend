/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: Preloader.jsx
 *
 * -----------------------------------------------------------------------------
 * Indicador visual de carga utilizado mientras se procesa
 * una solicitud de análisis climático o mientras se recupera
 * un análisis guardado.
 *
 * Cuando recibe un mensaje mediante la prop "message", muestra
 * ese mensaje de forma fija.
 *
 * Cuando no recibe un mensaje, utiliza los mensajes dinámicos
 * definidos para el proceso de generación de un nuevo análisis.
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

function Preloader({ message = null }) {
  const [messageIndex, setMessageIndex] = useState(0);

  // ==============================
  // Cambio de mensaje
  // ==============================

  /**
   * Los mensajes cambian únicamente cuando no se
   * proporciona un mensaje estático.
   *
   * Esto permite reutilizar el componente para operaciones
   * diferentes a la generación de un análisis.
   */
  useEffect(() => {
    if (message) {
      return undefined;
    }

    const interval = setInterval(() => {
      setMessageIndex((currentIndex) => {
        return (currentIndex + 1) % LOADING_MESSAGES.length;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [message]);

  // ==============================
  // Render
  // ==============================

  return (
    <section className="preloader" aria-live="polite">
      <div className="preloader__container">
        <div className="preloader__spinner" aria-hidden="true"></div>

        <h2 className="preloader__title">
          {message || LOADING_MESSAGES[messageIndex]}
        </h2>
      </div>
    </section>
  );
}

export default Preloader;
