import { useState } from "react";
import "./StrategyCardList.css";

import StrategyCard from "../StrategyCard/StrategyCard";

import solarIcon from "../../images/icons/protection-solar.png";
import ventilationIcon from "../../images/icons/ventilation.png";
import humidityIcon from "../../images/icons/control-humidity.png";
import thermalMassIcon from "../../images/icons/thermal-mass.png";
import insulationIcon from "../../images/icons/insulation.png";
import orientationIcon from "../../images/icons/orientation.png";

function StrategyCardList({ onOpenModal }) {
  const [showAll, setShowAll] = useState(false);

  const strategies = [
    {
      id: 1,
      icon: solarIcon,
      title: "Protección solar",
      description:
        "Reduce la ganancia térmica causada por la radiación solar y mejora el confort interior.",
      impact: 92,
    },
    {
      id: 2,
      icon: ventilationIcon,
      title: "Ventilación natural",
      description:
        "Favorece la circulación del aire para disipar el calor y mejorar la calidad ambiental interior.",
      impact: 89,
    },
    {
      id: 3,
      icon: humidityIcon,
      title: "Control de humedad",
      description:
        "Reduce los efectos del exceso o déficit de humedad para mejorar el confort y la durabilidad del edificio.",
      impact: 84,
    },
    {
      id: 4,
      icon: thermalMassIcon,
      title: "Masa térmica",
      description:
        "Estabiliza la temperatura interior mediante materiales que almacenan y liberan calor de forma gradual.",
      impact: 70,
    },
    {
      id: 5,
      icon: insulationIcon,
      title: "Aislamiento térmico",
      description:
        "Disminuye las pérdidas y ganancias de calor a través de la envolvente para mejorar la eficiencia energética.",
      impact: 58,
    },
    {
      id: 6,
      icon: orientationIcon,
      title: "Orientación",
      description:
        "Optimiza la ubicación del edificio para aprovechar el clima local, mejorar el confort y reducir la demanda energética.",
      impact: 50,
    },
  ];

  const visibleStrategies = showAll ? strategies : strategies.slice(0, 3);

  const remainingStrategies = strategies.length - 3;

  return (
    <section className="strategy-card-list">
      {visibleStrategies.map((strategy) => (
        <StrategyCard
          key={strategy.id}
          icon={strategy.icon}
          title={strategy.title}
          description={strategy.description}
          impact={strategy.impact}
          onMoreInfo={() => onOpenModal(strategy)}
        />
      ))}

      {remainingStrategies > 0 && (
        <button
          type="button"
          className="strategy-card-list__button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Mostrar menos" : `Ver todas las estrategias`}
        </button>
      )}
    </section>
  );
}

export default StrategyCardList;
