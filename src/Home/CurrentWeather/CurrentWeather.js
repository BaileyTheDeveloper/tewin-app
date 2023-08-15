import React, { useEffect, useState } from "react";
import "./currentweather.css";

function CurrentWeather() {
	const [currentTemp, setCurrentTemp] = useState(null); // Initialize with null
	const [CurrentCity, setCurrentCity] = useState();

	useEffect(() => {
		const url =
			"http://api.weatherapi.com/v1/current.json?key=6be74bb2ba6f4ad6a3121019231208&q=65807&aqi=no"; // Replace with your API key

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);

				if (data.current && data.current.temp_f) {
					setCurrentTemp(data.current.temp_f); // Set the temperature value
					setCurrentCity(data.location.name);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className="current-container">
			<h1>Current temperature in {CurrentCity}</h1>
			<h1 id="current-temp">
				{currentTemp !== null ? `${currentTemp}°F` : "Loading..."}
			</h1>
		</section>
	);
}

export default CurrentWeather;
