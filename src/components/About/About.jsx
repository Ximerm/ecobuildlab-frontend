/**
 *
 * -----------------------------------------------------------------------------
 * EcoBuildLab
 *
 * Archivo: About.jsx
 * -----------------------------------------------------------------------------
 *
 * Sección informativa sobre la autora y el propósito de EcoBuildLab.
 *
 * Presenta:
 *
 * - Perfil profesional de la autora.
 * - Relación entre arquitectura, tecnología y sostenibilidad.
 * - Propósito de EcoBuildLab.
 * - Alcance y carácter orientativo de los resultados de la plataforma.
 *
 * -----------------------------------------------------------------------------
 */

// ==============================
// Dependencias
// ==============================

import "./About.css";

import profileImage from "../../images/profileImage.png";

// ==============================
// Componente
// ==============================

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
          <h2 className="about__title">Sobre EcoBuildLab</h2>
          <p className="about__paragraph">
            <strong>EcoBuildLab</strong> nace de la integración entre
            arquitectura, datos climáticos y tecnología. La plataforma analiza
            información climática histórica de una ubicación y la transforma en
            indicadores y estrategias bioclimáticas que pueden apoyar las
            primeras decisiones de diseño arquitectónico.
          </p>

          <p className="about__paragraph">
            Soy <strong>Arquitecta y Full Stack Web Developer</strong>,
            apasionada por crear soluciones digitales que integren tecnología,
            diseño y sostenibilidad. Mi formación y experiencia en arquitectura
            bioclimática complementan mi perfil como desarrolladora,
            permitiéndome abordar problemas reales desde una perspectiva
            interdisciplinaria.
          </p>

          <p className="about__paragraph">
            La herramienta está concebida como un recurso inicial para el
            análisis de condiciones climáticas en contextos tropicales. Sus
            resultados son orientativos y no sustituyen un estudio bioclimático
            detallado, la información meteorológica local ni las condiciones
            particulares de cada proyecto, por lo que deben corroborarse antes
            de tomar decisiones definitivas de diseño.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==============================
// Exportaciones
// ==============================
export default About;
