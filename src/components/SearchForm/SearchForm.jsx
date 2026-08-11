/**
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 * Archivo: SearchForm.jsx
 * -----------------------------------------------------------------------------
 * Formulario para buscar una ubicación.
 *
 * Permite ingresar una ciudad y un país para
 * generar un análisis climático.
 *
 * Valida que la ubicación incluya tanto la ciudad
 * como el país antes de iniciar la búsqueda.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================
import "./SearchForm.css";

import { useState } from "react";

// ==============================
// Componente
// ==============================

function SearchForm({ onSearch, isLoading }) {
  const [location, setLocation] = useState("");
  const [validationError, setValidationError] = useState("");

  // ==============================
  // Envío del formulario
  // ==============================

  function handleSubmit(e) {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    const value = location.trim();

    if (!value) {
      setValidationError(
        "Ingresa una ciudad y un país para realizar el análisis.",
      );
      return;
    }

    const [city, ...countryParts] = value
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);

    const country = countryParts.join(", ");

    if (!city || !country) {
      setValidationError(
        "Ingresa una ciudad y un país para realizar el análisis.",
      );
      return;
    }

    setValidationError("");

    onSearch({
      city,
      country,
    });
  }

  // ==============================
  // Cambio de ubicación
  // ==============================

  function handleLocationChange(e) {
    setLocation(e.target.value);

    if (validationError) {
      setValidationError("");
    }
  }

  // ==============================
  // Render
  // ==============================

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__field">
        <label className="search-form__label" htmlFor="city">
          Ciudad, país
        </label>

        <input
          id="city"
          className="search-form__input"
          type="text"
          name="city"
          autoComplete="address-level2"
          placeholder="Ingresa una ciudad, país"
          required
          value={location}
          onChange={handleLocationChange}
          disabled={isLoading}
          aria-invalid={Boolean(validationError)}
          aria-describedby={validationError ? "search-form-error" : undefined}
        />

        {validationError && (
          <p id="search-form-error" className="search-form__error">
            {validationError}
          </p>
        )}
      </div>

      <button
        className="search-form__button"
        type="submit"
        disabled={isLoading || !location.trim()}
      >
        {isLoading ? "Analizando..." : "Analizar clima"}
      </button>
    </form>
  );
}

export default SearchForm;
