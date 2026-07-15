import "./StrategyCard.css";

function StrategyCard({ icon, title, description, priority }) {
  const priorities = {
    high: {
      label: "Alta prioridad",
      className: "strategy-card__priority--high",
    },
    medium: {
      label: "Media prioridad",
      className: "strategy-card__priority--medium",
    },
    low: {
      label: "Complementaria",
      className: "strategy-card__priority--low",
    },
  };

  const currentPriority = priorities[priority];

  return (
    <article className="strategy-card">
      <div className="strategy-card__content">
        <div className="strategy-card__icon-wrapper">
          <img src={icon} alt={title} className="strategy-card__icon" />
        </div>

        <div className="strategy-card__text">
          <h3 className="strategy-card__title">{title}</h3>

          <p className="strategy-card__description">{description}</p>
        </div>
      </div>

      <span className={`strategy-card__priority ${currentPriority.className}`}>
        {currentPriority.label}
      </span>
    </article>
  );
}

export default StrategyCard;
