import "./About.css";

import profileImage from "../../images/profileImage.png";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image">
          <img
            src={profileImage}
            alt="Foto autor"
            className="about__image-element"
          />
        </div>

        <div className="about__content">
          <h2 className="about__title">Sobre mí</h2>

          <p className="about__paragraph">
            Soy <strong>Full Stack Web Developer</strong> apasionada por crear
            aplicaciones web modernas, accesibles y responsivas. Trabajo con
            JavaScript, React, HTML5, CSS3, Node.js, Express y MongoDB,
            desarrollando soluciones intuitivas mediante la integración de APIs
            y una experiencia de usuario centrada en el diseño.
          </p>

          <p className="about__paragraph">
            Mi formación como arquitecta complementa mi perfil como
            desarrolladora, permitiéndome crear herramientas digitales
            orientadas a resolver problemas reales. <strong>EcoBuildLab</strong>
            , transforma datos climáticos en estrategias bioclimáticas para
            apoyar las primeras decisiones de diseño arquitectónico.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
