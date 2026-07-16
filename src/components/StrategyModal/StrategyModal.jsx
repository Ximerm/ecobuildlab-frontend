import "./StrategyModal.css";

import closeIcon from "../../images/icons/close.svg";
import solarIcon from "../../images/icons/protection-solar.png";
import infoIcon from "../../images/icons/info.png";

import objectiveIcon from "../../images/icons/objective.png";
import questionIcon from "../../images/icons/question.png";
import recommendationIcon from "../../images/icons/recommendation.png";
import climateIcon from "../../images/icons/climate.png";

import temperatureIcon from "../../images/icons/temperature.png";
import humidityIcon from "../../images/icons/humidity.png";
import windIcon from "../../images/icons/wind.png";
import precipitationIcon from "../../images/icons/precipitation.png";
import radiationIcon from "../../images/icons/radiation.png";

function StrategyModal() {
  return (
    <div className="strategy-modal">
      <div className="strategy-modal__container">
        <button
          type="button"
          className="strategy-modal__close"
          aria-label="Cerrar"
        >
          <img
            src={closeIcon}
            alt=""
            aria-hidden="true"
            className="strategy-modal__close-icon"
          />
        </button>

        <div className="strategy-modal__content">
          <header className="strategy-modal__header">
            <div className="strategy-modal__header-icon">
              <img
                src={solarIcon}
                alt="Protección solar"
                className="strategy-modal__icon"
              />
            </div>

            <div className="strategy-modal__heading">
              <h2 className="strategy-modal__title">Protección solar</h2>

              <div className="strategy-modal__impact">
                <div className="strategy-modal__impact-header">
                  <span className="strategy-modal__impact-label">
                    Impacto estimado a partir de:
                  </span>
                </div>

                <div className="strategy-modal__factors">
                  <div className="strategy-modal__chips">
                    <div className="strategy-modal__chip">
                      <img src={radiationIcon} alt="" aria-hidden="true" />

                      <span>Radiación solar</span>
                    </div>

                    <div className="strategy-modal__chip">
                      <img src={temperatureIcon} alt="" aria-hidden="true" />

                      <span>Temperatura máxima</span>
                    </div>
                  </div>
                </div>

                <div className="strategy-modal__progress-wrapper">
                  <div className="strategy-modal__progress">
                    <div
                      className="strategy-modal__progress-fill"
                      style={{ width: "92%" }}
                    ></div>
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
                alt=""
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
                alt=""
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
              Incorporar elementos de sombreado ayuda a mejorar el confort
              térmico y reducir la carga de refrigeración.
            </p>
          </section>

          <section className="strategy-modal__section">
            <div className="strategy-modal__section-header">
              <img
                src={recommendationIcon}
                alt=""
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
                alt=""
                aria-hidden="true"
                className="strategy-modal__section-icon"
              />

              <h3 className="strategy-modal__section-title">
                Variables climáticas relacionadas
              </h3>
            </div>

            <div className="strategy-modal__variables">
              <div className="strategy-modal__variable strategy-modal__variable--active">
                <img src={temperatureIcon} alt="" />
                <span>Temperatura</span>
              </div>

              <div className="strategy-modal__variable strategy-modal__variable--active">
                <img src={humidityIcon} alt="" />
                <span>Humedad</span>
              </div>

              <div className="strategy-modal__variable strategy-modal__variable--inactive">
                <img src={windIcon} alt="" />
                <span>Viento</span>
              </div>

              <div className="strategy-modal__variable strategy-modal__variable--inactive">
                <img src={precipitationIcon} alt="" />
                <span>Precipitación</span>
              </div>

              <div className="strategy-modal__variable strategy-modal__variable--active">
                <img src={radiationIcon} alt="" />
                <span>Radiación</span>
              </div>
            </div>
          </section>

          <div className="strategy-modal__variables-note">
            <img
              src={infoIcon}
              alt=""
              aria-hidden="true"
              className="strategy-modal__variables-note-icon"
            />

            <span>
              Las variables resaltadas tuvieron mayor influencia en esta
              recomendación.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategyModal;
