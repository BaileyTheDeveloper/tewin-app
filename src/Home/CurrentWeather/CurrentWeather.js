import React, { useEffect, useState } from "react";
import "./currentweather.css";

function CurrentWeather({zipCode}) {
	const [currentTemp, setCurrentTemp] = useState(null); // Initialize with null
	const [CurrentCity, setCurrentCity] = useState();
	const [CurrentCondition, setCurrentCondition] = useState();

	useEffect(() => {
		const url =
			`https://api.weatherapi.com/v1/current.json?key=6be74bb2ba6f4ad6a3121019231208 &q=${zipCode}&aqi=no`; // Replace with your API key

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);

				if (data.current && data.current.temp_f) {
					setCurrentTemp(data.current.temp_f); // Set the temperature value
					setCurrentCity(data.location.name);
					setCurrentCondition(data.current.condition.text);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, [zipCode]);

	return (
		<section className="current-container">
			<h1>Current conditions in {CurrentCity}</h1>
			<h1 id="current-temp">
				{currentTemp !== null ? `${currentTemp}°F` : "Loading..."}
			</h1>
			<h1>{CurrentCondition}</h1>
		</section>
	);
}

export default CurrentWeather;
