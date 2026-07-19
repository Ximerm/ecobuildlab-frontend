import "./AnalysisCardList.css";

import { useNavigate } from "react-router-dom";

import AnalysisCard from "../AnalysisCard/AnalysisCard";

import coldHumidIcon from "../../images/climates/cold-humid.png";
import coldDryIcon from "../../images/climates/cold-dry.png";
import temperateHumidIcon from "../../images/climates/temperate-humid.png";
import temperateDryIcon from "../../images/climates/temperate-dry.png";
import warmHumidIcon from "../../images/climates/warm-humid.png";
import warmDryIcon from "../../images/climates/warm-dry.png";
import highMountainIcon from "../../images/climates/high-mountain.png";

import solarIcon from "../../images/strategies/protection-solar.png";
import ventilationIcon from "../../images/strategies/ventilation.png";
import humidityIcon from "../../images/strategies/control-humidity.png";
import orientationIcon from "../../images/strategies/orientation.png";

const analyses = [
  {
    id: 1,
    city: "Pasto, Colombia",
    climate: "Frío húmedo",
    climateIcon: coldHumidIcon,
    date: "18 jul 2026",
  },
  {
    id: 2,
    city: "Bogotá, Colombia",
    climate: "Frío seco",
    climateIcon: coldDryIcon,
    date: "17 jul 2026",
  },
  {
    id: 3,
    city: "Medellín, Colombia",
    climate: "Templado húmedo",
    climateIcon: temperateHumidIcon,
    date: "16 jul 2026",
  },
  {
    id: 4,
    city: "Villa de Leyva, Colombia",
    climate: "Templado seco",
    climateIcon: temperateDryIcon,
    date: "15 jul 2026",
  },
  {
    id: 5,
    city: "Cartagena, Colombia",
    climate: "Cálido húmedo",
    climateIcon: warmHumidIcon,
    date: "14 jul 2026",
  },
  {
    id: 6,
    city: "La Guajira, Colombia",
    climate: "Cálido seco",
    climateIcon: warmDryIcon,
    date: "13 jul 2026",
  },
  {
    id: 7,
    city: "Sumapaz, Colombia",
    climate: "Alta montaña",
    climateIcon: highMountainIcon,
    date: "12 jul 2026",
  },
];

const strategies = [
  {
    name: "Protección solar",
    icon: solarIcon,
  },
  {
    name: "Ventilación natural",
    icon: ventilationIcon,
  },
  {
    name: "Orientación",
    icon: orientationIcon,
  },
];

function AnalysisCardList() {
  const navigate = useNavigate();

  return (
    <section className="analysis-card-list">
      <div className="analysis-card-list__content">
        <h2 className="analysis-card-list__title">Mis Análisis</h2>

        <p className="analysis-card-list__description">
          Haz clic en una tarjeta para consultar el análisis completo.
        </p>

        <div className="analysis-card-list__grid">
          {analyses.map((analysis) => (
            <AnalysisCard
              key={analysis.id}
              city={analysis.city}
              climate={analysis.climate}
              climateIcon={analysis.climateIcon}
              date={analysis.date}
              strategies={strategies}
              onClick={() => navigate(`/analysis/${analysis.id}`)}
              onDelete={() => console.log("Eliminar")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnalysisCardList;
