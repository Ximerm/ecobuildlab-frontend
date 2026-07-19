import "./NoResults.css";

import notFoundIcon from "../../images/icons/notFound.png";

function NoResults() {
  return (
    <section className="no-results">
      <div className="no-results__container">
        <img
          src={notFoundIcon}
          alt="Not found"
          aria-hidden="true"
          className="no-results__icon"
        />

        <h2 className="no-results__title">No encontramos la ciudad</h2>

        <p className="no-results__text">
          No fue posible encontrar información climática para la ciudad
          ingresada.
        </p>

        <p className="no-results__text">
          Verifica que el nombre esté escrito correctamente e inténtalo
          nuevamente.
        </p>
      </div>
    </section>
  );
}

export default NoResults;
