/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: Preloader.jsx
 *
 * -----------------------------------------------------------------------------
 * Indicador visual de carga utilizado durante las operaciones
 * que requieren esperar una respuesta del backend.
 *
 * Para la generación de un análisis nuevo utiliza mensajes dinámicos.
 * Para otras operaciones, como abrir un análisis guardado, puede
 * recibir un mensaje estático mediante la prop `message`.
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
    }, 1200);

    return () => clearInterval(interval);
  }, [message]);

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
