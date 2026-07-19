import "./StrategyModal.css";

import Modal from "../Modal/Modal";

import infoIcon from "../../images/icons/info.png";

import objectiveIcon from "../../images/icons/objective.png";
import questionIcon from "../../images/icons/question.png";
import recommendationIcon from "../../images/icons/recommendation.png";
import climateIcon from "../../images/icons/climate.png";

import temperatureIcon from "../../images/indicators/temperature.png";
import humidityIcon from "../../images/indicators/humidity.png";
import windIcon from "../../images/indicators/wind.png";
import precipitationIcon from "../../images/indicators/precipitation.png";
import radiationIcon from "../../images/indicators/radiation.png";

function StrategyModal({ strategy, onClose }) {
  if (!strategy) return null;

  return (
    <Modal onClose={onClose} className="strategy-modal">
      <div className="strategy-modal__content">
        <header className="strategy-modal__header">
          <div className="strategy-modal__header-icon">
            <img
              src={strategy.icon}
              alt={strategy.title}
              className="strategy-modal__icon"
            />
          </div>

          <div className="strategy-modal__heading">
            <h2 className="strategy-modal__title">{strategy.title}</h2>

            <div className="strategy-modal__impact">
              <span className="strategy-modal__impact-label">
                Impacto estimado a partir de:
              </span>

              <div className="strategy-modal__factors">
                <div className="strategy-modal__chips">
                  <div className="strategy-modal__chip">
                    <img
                      src={radiationIcon}
                      alt="Radiation"
                      aria-hidden="true"
                    />
                    <span>Radiación solar</span>
                  </div>

                  <div className="strategy-modal__chip">
                    <img
                      src={temperatureIcon}
                      alt="Temperature"
                      aria-hidden="true"
                    />
                    <span>Temperatura máxima</span>
                  </div>
                </div>
              </div>

              <div className="strategy-modal__progress-wrapper">
                <div className="strategy-modal__progress">
                  <div
                    className="strategy-modal__progress-fill"
                    style={{ width: "92%" }}
                  />
                </div>

                <span className="strategy-modal__impact-value">92/100</span>
              </div>
            </div>
          </div>
        </header>

        <section className="strategy-modal__section">
          <div className="strategy-modal__section-header">
            <img
              src={objectiveIcon}
              alt="Objective"
              aria-hidden="true"
              className="strategy-modal__section-icon"
            />

            <h3 className="strategy-modal__section-title">Objetivo</h3>
          </div>

          <p className="strategy-modal__section-content">
            Reducir la ganancia térmica causada por la radiación solar.
          </p>
        </section>

        <section className="strategy-modal__section">
          <div className="strategy-modal__section-header">
            <img
              src={questionIcon}
              alt="Question"
              aria-hidden="true"
              className="strategy-modal__section-icon"
            />

            <h3 className="strategy-modal__section-title">
              ¿Por qué se recomienda?
            </h3>
          </div>

          <p className="strategy-modal__section-content">
            La radiación solar directa incrementa el sobrecalentamiento del
            edificio, especialmente durante las horas de mayor exposición.
            Incorporar elementos de sombreado ayuda a mejorar el confort térmico
            y reducir la carga de refrigeración.
          </p>
        </section>

        <section className="strategy-modal__section">
          <div className="strategy-modal__section-header">
            <img
              src={recommendationIcon}
              alt="Recommendation"
              aria-hidden="true"
              className="strategy-modal__section-icon"
            />

            <h3 className="strategy-modal__section-title">
              Recomendaciones de diseño
            </h3>
          </div>

          <ul className="strategy-modal__recommendations">
            <li>Incorporar aleros horizontales.</li>
            <li>Utilizar parasoles según la orientación.</li>
            <li>Integrar vegetación de sombra.</li>
            <li>Seleccionar materiales de baja absorción térmica.</li>
          </ul>
        </section>

        <section className="strategy-modal__section">
          <div className="strategy-modal__section-header">
            <img
              src={climateIcon}
              alt="Climate"
              aria-hidden="true"
              className="strategy-modal__section-icon"
            />

            <h3 className="strategy-modal__section-title">
              Variables climáticas relacionadas
            </h3>
          </div>

          <div className="strategy-modal__variables">
            <div className="strategy-modal__variable strategy-modal__variable--active">
              <img src={temperatureIcon} alt="Temperature" />
              <span>Temperatura</span>
            </div>

            <div className="strategy-modal__variable strategy-modal__variable--active">
              <img src={humidityIcon} alt="Humidity" />
              <span>Humedad</span>
            </div>

            <div className="strategy-modal__variable strategy-modal__variable--inactive">
              <img src={windIcon} alt="Wind" />
              <span>Viento</span>
            </div>

            <div className="strategy-modal__variable strategy-modal__variable--inactive">
              <img src={precipitationIcon} alt="Precipitation" />
              <span>Precipitación</span>
            </div>

            <div className="strategy-modal__variable strategy-modal__variable--active">
              <img src={radiationIcon} alt="Radiation" />
              <span>Radiación</span>
            </div>
          </div>
        </section>

        <div className="strategy-modal__variables-note">
          <img
            src={infoIcon}
            alt="Information"
            aria-hidden="true"
            className="strategy-modal__variables-note-icon"
          />

          <span>
            Las variables destacadas tuvieron mayor influencia en esta
            recomendación.
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default StrategyModal;
