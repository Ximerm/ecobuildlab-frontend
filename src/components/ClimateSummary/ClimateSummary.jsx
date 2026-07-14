import "./ClimateSummary.css";
import WeatherCardList from "../WeatherCardList/WeatherCardList";

function ClimateSummary() {
  return (
    <section className="climate-summary">
      <div className="climate-summary__container">
        <div className="climate-summary__header">
          <div className="climate-summary__info">
            <h2 className="climate-summary__city">Bogotá, Colombia</h2>

            <h3 className="climate-summary__title">Resumen climático</h3>

            <p className="climate-summary__description">
              Interpretación automática basada en datos climáticos históricos.
            </p>
          </div>

          <div className="climate-summary__highlights">
            {/* Aquí irán después los tres indicadores */}
          </div>
        </div>

        <WeatherCardList />
      </div>
    </section>
  );
}

export default ClimateSummary;
