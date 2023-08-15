import React, { useEffect, useState } from "react";
import "./currentweather.css";

function CurrentWeather() {
	const [currentTemp, setCurrentTemp] = useState(null);
	const [CurrentCity, setCurrentCity] = useState();

	useEffect(() => {
		const url =
			"http://api.weatherapi.com/v1/forecast.json?key=6be74bb2ba6f4ad6a3121019231208 &q=65807&days=3&aqi=no&alerts=no";
			

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);

				if (data.current && data.current.temp_f) {
					setCurrentTemp(data.current.temp_f);
					setCurrentCity(data.location.name);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className = "currentContainer">
			<h1>Current temperature in <br/>{CurrentCity}</h1>
			<h1>{currentTemp !== null ? <h1 id="currentHeading">{currentTemp}°F</h1> : "Loading..."}</h1>
		</section>
	);
}

export default CurrentWeather;
