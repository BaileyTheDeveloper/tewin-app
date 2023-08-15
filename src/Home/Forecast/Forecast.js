import React, { useEffect, useState } from "react";
import "./forecast.css";

function Forecast() {
	const [Forecast, setForecast] = useState([]);
	const [CurrentCity, setCurrentCity] = useState();

	useEffect(() => {
		const url =
			"https://api.weatherapi.com/v1/forecast.json?key=6be74bb2ba6f4ad6a3121019231208&q=65807&days=3&aqi=no&alerts=no";

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);

				if (data.forecast && data.forecast.forecastday) {
					setForecast(data.forecast.forecastday);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, []);

	const formatDate = (dateStr) => {
		const dateObj = new Date(dateStr);
		return dateObj.toLocaleString("default", {
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
					{day.day.maxtemp_f > 75 && (
						<h2 className="forecastHeader">Wear shorts!</h2>
					)}
				</div>
			))}
		</div>
	);
}

export default Forecast;
