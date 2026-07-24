import "./IndicatorCard.css";

function IndicatorCard({ icon, title, children }) {
  return (
    <article className="indicator-card">
      <div className="indicator-card__header">
        <img src={icon} alt={title} className="indicator-card__icon" />

        <h3 className="indicator-card__title">{title}</h3>
      </div>

      <div className="indicator-card__content">{children}</div>
    </article>
  );
}

export default IndicatorCard;
