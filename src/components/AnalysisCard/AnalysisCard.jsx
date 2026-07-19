import "./AnalysisCard.css";

import deleteIcon from "../../images/delete.svg";

function AnalysisCard({
  city,
  climate,
  climateIcon,
  date,
  strategies,
  onDelete,
  onClick,
}) {
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
        <img src={deleteIcon} alt="" className="analysis-card__delete-icon" />
      </button>

      <div className="analysis-card__header">
        <img
          src={climateIcon}
          alt={climate}
          className="analysis-card__climate-icon"
        />

        <span className="analysis-card__badge">{climate}</span>
      </div>

      <h2 className="analysis-card__city">{city}</h2>
      <p className="analysis-card__date">Analizado el {date}</p>

      <div className="analysis-card__content">
        <h3 className="analysis-card__subtitle">Estrategias principales</h3>

        <ul className="analysis-card__strategies">
          {strategies.map((strategy) => (
            <li key={strategy.name} className="analysis-card__strategy">
              <img
                src={strategy.icon}
                alt=""
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
