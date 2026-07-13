import "./Main.css";
import { Link } from "react-router-dom";

import About from "../About/About";
import heroImage from "../../images/heroImage.png";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">De los datos climáticos al diseño</h1>

            <p className="hero__description">
              Analiza las condiciones climáticas de una ciudad y obtén
              estrategias bioclimáticas para apoyar las primeras decisiones de
              diseño arquitectónico.
            </p>

            <Link to="/results" className="hero__button">
              Explorar estrategias
            </Link>
          </div>

          <div className="hero__image">
            <img
              src={heroImage}
              alt="Ilustración de vivienda"
              className="hero__image-element"
            />
          </div>
        </div>
      </section>

      <About />
    </main>
  );
}

export default Main;
