import "./Main.css";

import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>EcoBuildLab</h1>
        <p>
          Explora estrategias de diseño sostenible mediante datos climáticos.
        </p>
      </section>

      <SearchForm />

      <About />
    </main>
  );
}

export default Main;
