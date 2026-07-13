import "./Results.css";

import SearchForm from "../SearchForm/SearchForm";

function Results() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">De los datos climáticos al diseño</h1>

          <p className="hero__description">
            Analiza las condiciones climáticas de una ciudad y obtén estrategias
            bioclimáticas para apoyar las primeras decisiones de diseño
            arquitectónico.
          </p>
        </div>

        <div className="hero__image">
          {/* Aquí agregaremos la ilustración del Figma más adelante */}
        </div>
      </section>

      <SearchForm />
    </main>
  );
}

export default Results;
