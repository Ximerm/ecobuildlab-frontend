import "./Hero.css";

import SearchForm from "../SearchForm/SearchForm";

import heroImage from "../../images/heroImage.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">De los datos climáticos al diseño</h1>

          <p className="hero__description">
            Analiza las condiciones climáticas de una ciudad y obtén estrategias
            bioclimáticas para apoyar las primeras decisiones de diseño
            arquitectónico.
          </p>

          <SearchForm />
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
  );
}

export default Hero;
