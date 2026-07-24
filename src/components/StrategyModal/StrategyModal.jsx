import "./StrategyModal.css";

import Modal from "../Modal/Modal";

import { METRIC_SCALES } from "../../utils/strategies/metricScales";
import { STRATEGY_METRIC_PRESENTATION } from "../../utils/presentation/strategyMetricPresentation";
import { STRATEGY_ICON_PRESENTATION } from "../../utils/presentation/strategyIconPresentation";

import infoIcon from "../../images/icons/info.png";

import objectiveIcon from "../../images/icons/objective.png";
import questionIcon from "../../images/icons/question.png";
import recommendationIcon from "../../images/icons/recommendation.png";
import climateIcon from "../../images/icons/climate.png";

function StrategyModal({ strategy, onClose }) {
  if (!strategy) return null;

  const impactMetrics = strategy.impact.metricBreakdown.map((item) => ({
    ...item,
    ...METRIC_SCALES[item.metric],
    ...STRATEGY_METRIC_PRESENTATION[item.metric],
  }));

  const impactSummaryMetrics = [...impactMetrics]
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 2);

  const priorityOrder = {
    high: 0,
    medium: 1,
    low: 2,
  };

  const sortedRecommendations = [...strategy.recommendations].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
  );

  const groupedRecommendations = {
    high: sortedRecommendations.filter((r) => r.priority === "high"),
    medium: sortedRecommendations.filter((r) => r.priority === "medium"),
    low: sortedRecommendations.filter((r) => r.priority === "low"),
  };

  const recommendationSections = [
    {
      key: "high",
      title: "Esenciales",
    },
    {
      key: "medium",
      title: "Recomendadas",
    },
    {
      key: "low",
      title: "Complementarias",
    },
  ];
  const formatMetricValue = (metric) => {
    if (metric.metric === "annualPrecipitation") {
      return Math.round(metric.value).toLocaleString();
    }

    return Number(metric.value.toFixed(1));
  };

  return (
    <Modal onClose={onClose} className="strategy-modal">
      <div className="strategy-modal__content">
        <header className="strategy-modal__header">
          <div className="strategy-modal__header-icon">
            <img
              src={STRATEGY_ICON_PRESENTATION[strategy.icon]}
              alt={strategy.name}
              className="strategy-modal__icon"
            />
          </div>

          <div className="strategy-modal__heading">
            <h2 className="strategy-modal__title">{strategy.name}</h2>

            <div className="strategy-modal__impact">
              <span className="strategy-modal__impact-label">
                Principales variables consideradas
              </span>

              <div className="strategy-modal__factors">
                <div className="strategy-modal__chips">
                  {impactSummaryMetrics.map((metric) => (
                    <div key={metric.metric} className="strategy-modal__chip">
                      <img
                        src={metric.icon}
                        alt={metric.label}
                        aria-hidden="true"
                      />

                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="strategy-modal__progress-wrapper">
                <div className="strategy-modal__progress">
                  <div
                    className="strategy-modal__progress-fill"
                    style={{ width: `${strategy.impact.score}%` }}
                  />
                </div>

                <div className="strategy-modal__impact-score">
                  <span className="strategy-modal__impact-value">
                    {strategy.impact.score} / 100
                  </span>

                  <span
                    className="strategy-modal__separator"
                    aria-hidden="true"
                  />

                  <span className="strategy-modal__impact-level">
                    {strategy.impact.label}
                  </span>
                </div>
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
            {strategy.objective}
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
            {strategy.rationale}
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

          <div className="strategy-modal__recommendations">
            {recommendationSections.map((section) => {
              const recommendations = groupedRecommendations[section.key];

              if (recommendations.length === 0) return null;

              return (
                <div
                  key={section.key}
                  className="strategy-modal__recommendation-group"
                >
                  <h4 className="strategy-modal__recommendation-priority">
                    {section.title}
                  </h4>

                  <ul>
                    {recommendations.map((recommendation) => (
                      <li key={recommendation.id}>{recommendation.text}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
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
              Condiciones climáticas analizadas
            </h3>
          </div>

          <div className="strategy-modal__variables">
            {impactMetrics.map((metric) => (
              <div key={metric.metric} className="strategy-modal__variable">
                <img src={metric.icon} alt="" aria-hidden="true" />

                <div className="strategy-modal__variable-content">
                  <span className="strategy-modal__variable-name">
                    {metric.label}
                  </span>

                  <span className="strategy-modal__variable-value">
                    {formatMetricValue(metric)} {metric.unit}
                  </span>
                </div>
              </div>
            ))}
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
            Estos valores corresponden a las condiciones climáticas del sitio
            utilizadas en la evaluación de esta estrategia.
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default StrategyModal;
