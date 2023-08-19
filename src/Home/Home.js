import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import ZipForm from "./ZipForm/ZipForm";
import "./home.css";

function Home() {
	const [zipCode, setZipCode] = useState("65807");
	const handleZipChange = (newZip) => {
		setZipCode(newZip);
	};

	
	return (
		<section className="home-container">
			<ZipForm onZipCodeChange={handleZipChange} />
			<CurrentWeather zipCode={zipCode} />
			<Forecast zipCode={zipCode} />
		</section>
	);
}
export default Home;

//change background based on weather conditions
