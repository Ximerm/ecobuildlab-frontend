import "./Results.css";

import Hero from "../Hero/Hero";
import ClimateSummary from "../ClimateSummary/ClimateSummary";
import StrategySection from "../StrategySection/StrategySection";

function Results({ handleOpenLoginModal }) {
  return (
    <main className="main">
      <Hero />

      <ClimateSummary />

      <StrategySection handleOpenLoginModal={handleOpenLoginModal} />
    </main>
  );
}

export default Results;
