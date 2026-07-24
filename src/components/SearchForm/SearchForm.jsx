import "./SearchForm.css";

import { useState } from "react";

function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__field">
        <label htmlFor="city" className="search-form__label">
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
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button className="search-form__button" type="submit">
        Analizar clima
      </button>
    </form>
  );
}

export default SearchForm;
