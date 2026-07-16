import "./StrategySection.css";

import StrategyCardList from "../StrategyCardList/StrategyCardList";
import SaveAnalysis from "../SaveAnalysis/SaveAnalysis";
import StrategyNote from "../StrategyNote/StrategyNote";
import StrategyModal from "../StrategyModal/StrategyModal";

function StrategySection() {
  return (
    <section className="strategy-section">
      <div className="strategy-section__container">
        <h2 className="strategy-section__title">
          Estrategias de diseño bioclimático
        </h2>

        <p className="strategy-section__description">
          Se muestran las estrategias con mayor impacto para apoyar las primeras
          decisiones de diseño de la ubicación analizada.
        </p>

        <StrategyCardList />

        <SaveAnalysis />

        <StrategyNote />

        <StrategyModal />
      </div>
    </section>
  );
}

export default StrategySection;
