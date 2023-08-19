import React, { useEffect, useState } from "react";
import "./forecast.css";

function Forecast({ zipCode }) {
	const [Forecast, setForecast] = useState([]);

	useEffect(() => {
		const url = `https://api.weatherapi.com/v1/forecast.json?key=6be74bb2ba6f4ad6a3121019231208&q=${zipCode}&days=5&aqi=no&alerts=no`;

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);

				if (data.forecast && data.forecast.forecastday) {
					const nextThreeDays = data.forecast.forecastday.slice(1, 4);
					setForecast(nextThreeDays);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, [zipCode]);

	const formatDate = (dateStr) => {
		// Create a Date object in UTC
		const utcDate = new Date(dateStr);

		// Convert to the local time zone
		const localDate = new Date(
			utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
		);

		return localDate.toLocaleString("default", {
			month: "short",
			day: "numeric",
		});
	};

	return (
		<div className="forecastWrapper">
			{Forecast.map((day) => (
				<div className="forecastContainer" key={day.date}>
					<h1 className="forecastHeader">{formatDate(day.date)}</h1>
					<h1 className="forecastHeader">High temp: {day.day.maxtemp_f}°F</h1>
				</div>
			))}
		</div>
	);
}

export default Forecast;
