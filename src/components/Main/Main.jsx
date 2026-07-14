import "./Main.css";
import { Link } from "react-router-dom";

import About from "../About/About";
import Hero from "../Hero/Hero";

function Main() {
  return (
    <main className="main">
      <Hero />

      <About />
    </main>
  );
}

export default Main;
