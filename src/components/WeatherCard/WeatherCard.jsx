import "./WeatherCard.css";

function WeatherCard({ icon, title, children }) {
  return (
    <article className="weather-card">
      <div className="weather-card__header">
        <img src={icon} alt={title} className="weather-card__icon" />

        <h3 className="weather-card__title">{title}</h3>
      </div>

      <div className="weather-card__content">{children}</div>
    </article>
  );
}

export default WeatherCard;
