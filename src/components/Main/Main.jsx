import "./Main.css";

import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

function Main({ onSearch }) {
  return (
    <main className="main">
      <Hero>
        <SearchForm onSearch={onSearch} />
      </Hero>

      <About />
    </main>
  );
}

export default Main;
