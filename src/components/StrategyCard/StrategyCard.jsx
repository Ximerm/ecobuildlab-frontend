import "./StrategyCard.css";

import Tooltip from "../Tooltip/Tooltip";

import infoIcon from "../../images/icons/info.png";
import arrowRightIcon from "../../images/icons/arrow.png";

function StrategyCard({ icon, title, description, impact, onMoreInfo }) {
  return (
    <article className="strategy-card">
      <div className="strategy-card__header">
        <img src={icon} alt={title} className="strategy-card__icon" />

        <div className="strategy-card__text">
          <h3 className="strategy-card__title">{title}</h3>

          <p className="strategy-card__description">{description}</p>
        </div>
      </div>

      <div className="strategy-card__impact">
        <div className="strategy-card__impact-header">
          <div className="strategy-card__impact-title">
            <span>Impacto estimado</span>

            <Tooltip text="El impacto estimado refleja la influencia potencial de esta estrategia sobre el confort térmico, a partir de los indicadores climáticos analizados.">
              <button
                type="button"
                className="strategy-card__info-button"
                aria-label="Información sobre el impacto"
              >
                <img
                  src={infoIcon}
                  alt="Information"
                  aria-hidden="true"
                  className="strategy-card__info-icon"
                />
              </button>
            </Tooltip>
          </div>

          <span className="strategy-card__score">{impact}/100</span>
        </div>

        <div className="strategy-card__progress">
          <div
            className="strategy-card__progress-fill"
            style={{ width: `${impact}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        className="strategy-card__link"
        onClick={(e) => {
          e.currentTarget.blur();
          onMoreInfo();
        }}
      >
        <span>Recomendaciones de diseño</span>

        <img
          src={arrowRightIcon}
          alt="Arrow"
          aria-hidden="true"
          className="strategy-card__arrow"
        />
      </button>
    </article>
  );
}

export default StrategyCard;
