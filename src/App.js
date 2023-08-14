import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./landing/Landing"
import Home from "./Home/Home";
import Forecast from "./Home/Forecast/Forecast";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/forecast" element={<Forecast />} />
			</Routes>
		</Router>
	);
}

export default App;
