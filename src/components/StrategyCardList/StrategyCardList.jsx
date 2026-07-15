import "./StrategyCardList.css";

import StrategyCard from "../StrategyCard/StrategyCard";

import solarIcon from "../../images/icons/protection-solar.png";
import ventilationIcon from "../../images/icons/ventilation.png";
import humidityIcon from "../../images/icons/control-humidity.png";
import thermalMassIcon from "../../images/icons/thermal-mass.png";
import insulationIcon from "../../images/icons/insulation.png";
import orientationIcon from "../../images/icons/orientation.png";

function StrategyCardList() {
  return (
    <section className="strategy-card-list">
      <StrategyCard
        icon={solarIcon}
        title="Protección solar"
        description="Incorpora aleros, parasoles y elementos de sombreado para reducir la ganancia térmica."
        priority="high"
      />

      <StrategyCard
        icon={ventilationIcon}
        title="Ventilación natural"
        description="Aprovechar la dirección predominante del viento para favorecer la ventilación cruzada."
        priority="high"
      />

      <StrategyCard
        icon={humidityIcon}
        title="Control humedad"
        description="Favorecer la ventilación y seleccionar materiales resistentes a la humedad."
        priority="high"
      />

      <StrategyCard
        icon={thermalMassIcon}
        title="Masa térmica"
        description="Emplear materiales con alta inercia térmica para estabilizar la temperatura interior."
        priority="medium"
      />

      <StrategyCard
        icon={insulationIcon}
        title="Aislamiento térmico"
        description="Mejorar el aislamiento en cubierta y muros para reducir pérdidas de calor."
        priority="low"
      />
    </section>
  );
}

export default StrategyCardList;
