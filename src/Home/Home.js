import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import "./home.css";

function Home() {
    return (
        <main className = "container">
            <CurrentWeather />
            <Forecast />
        </main>
    )
}
export default Home;