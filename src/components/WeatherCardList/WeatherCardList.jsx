import "./WeatherCardList.css";

import WeatherCard from "../WeatherCard/WeatherCard";

function WeatherCardList() {
  return (
    <section className="weather-card-list">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </section>
  );
}

export default WeatherCardList;
