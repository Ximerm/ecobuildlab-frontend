import "./Results.css";

import Hero from "../Hero/Hero";
import ClimateSummary from "../ClimateSummary/ClimateSummary";
import StrategySection from "../StrategySection/StrategySection";
import SaveAnalysis from "../SaveAnalysis/SaveAnalysis";

function Results() {
  return (
    <main className="main">
      <Hero />

      <ClimateSummary />

      <StrategySection />

      <SaveAnalysis />
    </main>
  );
}

export default Results;
