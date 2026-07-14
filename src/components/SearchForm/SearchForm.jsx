import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__field">
        <input
          className="search-form__input"
          type="text"
          name="city"
          autoComplete="off"
          placeholder="Ingresa una ciudad (ej.: Bogotá, Colombia)"
        />
      </div>

      <button className="search-form__button" type="submit">
        Analizar clima
      </button>
    </form>
  );
}

export default SearchForm;
