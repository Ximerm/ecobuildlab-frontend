/**
 *
  ---
- EcoBuildLab
- Archivo: SearchForm.jsx
-
  ---
- Formulario para buscar una ubicación.
-
- Permite ingresar una ciudad y un país para
- generar un análisis climático.
-
  ---

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
      return;
    }

    const [city, ...countryParts] = value
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);

    const country = countryParts.join(", ");

    if (!city || !country) {
      return;
    }

    onSearch({
      city,
      country,
    });
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
          onChange={(e) => setLocation(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <button
        className="search-form__button"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Analizando..." : "Analizar clima"}
      </button>
    </form>
  );
}

export default SearchForm;
