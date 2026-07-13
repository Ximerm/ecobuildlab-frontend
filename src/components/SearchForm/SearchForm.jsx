import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <h2>Buscar ubicación</h2>

      <form className="search-form__form">
        <input
          type="text"
          placeholder="Ingresa una ciudad (ej.: Bogotá, Colombia)"
        />

        <button type="submit">Analizar clima</button>
      </form>
    </section>
  );
}

export default SearchForm;
