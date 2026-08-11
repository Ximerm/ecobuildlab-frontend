import "./Hero.css";

import heroImage from "../../images/heroImage.png";

function Hero({ children }) {
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

          <div
            id="search-desktop"
            className="hero__search hero__search--desktop"
          >
            {children}
          </div>
        </div>

        <div className="hero__image">
          <img
            src={heroImage}
            alt="Home ilustration"
            className="hero__image-element"
          />
        </div>
        <div id="search-mobile" className="hero__search hero__search--mobile">
          {children}
        </div>
      </div>
    </section>
  );
}

export default Hero;
