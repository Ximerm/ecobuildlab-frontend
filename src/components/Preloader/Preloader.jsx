import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader" aria-live="polite">
      <div className="preloader__container">
        <div className="preloader__spinner" aria-hidden="true"></div>

        <h2 className="preloader__title">
          Analizando condiciones climáticas...
        </h2>
      </div>
    </section>
  );
}

export default Preloader;
