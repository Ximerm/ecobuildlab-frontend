import coldHumidIcon from "../../images/climates/cold-humid.png";
import coldDryIcon from "../../images/climates/cold-dry.png";
import temperateHumidIcon from "../../images/climates/temperate-humid.png";
import temperateDryIcon from "../../images/climates/temperate-dry.png";
import warmHumidIcon from "../../images/climates/warm-humid.png";
import warmDryIcon from "../../images/climates/warm-dry.png";
import highMountainIcon from "../../images/climates/high-mountain.png";
import defaultClimateIcon from "../../images/climates/default.png";

export const CLIMATE_ICON_PRESENTATION = {
  CH: coldHumidIcon,
  CS: coldDryIcon,
  TH: temperateHumidIcon,
  TS: temperateDryIcon,
  WH: warmHumidIcon,
  WS: warmDryIcon,
  M: highMountainIcon,
};

export const getClimateIcon = (climateCode) =>
  CLIMATE_ICON_PRESENTATION[climateCode] ?? defaultClimateIcon;
