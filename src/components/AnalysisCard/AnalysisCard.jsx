import "./AnalysisCard.css";

import deleteIcon from "../../images/delete.svg";

import { getClimateIcon } from "../../utils/presentation/climateIconPresentation";
import { formatDate } from "../../utils/formatDate";
import { STRATEGY_ICON_PRESENTATION } from "../../utils/presentation/strategyIconPresentation";

function AnalysisCard({ savedAnalysis, onDelete, onClick }) {
  const { analysis, createdAt } = savedAnalysis;
  const mainStrategies = analysis.strategies.slice(0, 3);
  const climateIcon = getClimateIcon(analysis.climate.code);

  return (
    <article className="analysis-card" onClick={onClick}>
      <button
        className="analysis-card__delete"
        type="button"
        aria-label="Eliminar análisis"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <img
          src={deleteIcon}
          alt="Delete"
          className="analysis-card__delete-icon"
        />
      </button>

      <div className="analysis-card__header">
        <img
          src={climateIcon}
          alt={analysis.climate.name}
          className="analysis-card__climate-icon"
        />

        <span className="analysis-card__badge">{analysis.climate.name}</span>
      </div>

      <h2 className="analysis-card__city">{analysis.city}</h2>
      <p className="analysis-card__date">
        Analizado el {formatDate(createdAt)}
      </p>

      <div className="analysis-card__content">
        <h3 className="analysis-card__subtitle">Estrategias principales</h3>
        <ul className="analysis-card__strategies">
          {mainStrategies.map((strategy) => (
            <li key={strategy.code} className="analysis-card__strategy">
              <img
                src={STRATEGY_ICON_PRESENTATION[strategy.icon]}
                alt={strategy.name}
                className="analysis-card__strategy-icon"
              />

              <span>{strategy.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default AnalysisCard;
