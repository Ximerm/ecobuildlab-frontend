import "./StrategyNote.css";

import infoIcon from "../../images/icons/info.png";

function StrategyNote() {
  return (
    <section className="strategy-note">
      <div className="strategy-note__content">
        <div className="strategy-note__icon-wrapper">
          <img
            src={infoIcon}
            alt=""
            aria-hidden="true"
            className="strategy-note__icon"
          />
        </div>

        <p className="strategy-note__text">
          Las recomendaciones presentadas son orientativas y deben
          complementarse con el análisis específico del proyecto, las
          condiciones particulares del sitio y la normativa vigente.
        </p>
      </div>
    </section>
  );
}

export default StrategyNote;
