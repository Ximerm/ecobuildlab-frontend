import { useState } from "react";

import "./StrategyCardList.css";

import StrategyCard from "../StrategyCard/StrategyCard";

import { STRATEGY_ICON_PRESENTATION } from "../../utils/presentation/strategyIconPresentation";

function StrategyCardList({ strategies, onOpenModal, hasSaveSection = true }) {
  const [showAll, setShowAll] = useState(false);

  const visibleStrategies = showAll ? strategies : strategies.slice(0, 3);

  return (
    <section
      className={`strategy-card-list ${
        !hasSaveSection ? "strategy-card-list--analysis" : ""
      }`}
    >
      {visibleStrategies.map((strategy) => (
        <StrategyCard
          key={strategy.code}
          icon={STRATEGY_ICON_PRESENTATION[strategy.icon]}
          title={strategy.name}
          description={strategy.summary}
          impact={strategy.impact}
          onMoreInfo={() => onOpenModal(strategy)}
        />
      ))}

      {strategies.length > 3 && (
        <button
          type="button"
          className="strategy-card-list__button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Mostrar menos" : "Ver todas las estrategias"}
        </button>
      )}
    </section>
  );
}

export default StrategyCardList;
