import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import "./home.css";

function Home() {
    return (
        <section className="home-container">
        <CurrentWeather />
        <Forecast />
        </section>
    )
}
export default Home;