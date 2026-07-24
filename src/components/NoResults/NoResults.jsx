import "./NoResults.css";

import notFoundIcon from "../../images/icons/notFound.png";

function NoResults({ message }) {
  const isLocationError = message === "No se encontró la ciudad solicitada.";

  const title = isLocationError
    ? "No encontramos la ciudad"
    : "No fue posible completar la búsqueda";

  const description = isLocationError
    ? "Verifica que el nombre esté escrito correctamente e inténtalo nuevamente."
    : message;

  return (
    <section className="no-results">
      <div className="no-results__container">
        <img
          src={notFoundIcon}
          alt="Not found"
          aria-hidden="true"
          className="no-results__icon"
        />

        <h2 className="no-results__title">{title}</h2>

        <p className="no-results__text">{description}</p>
      </div>
    </section>
  );
}

export default NoResults;
