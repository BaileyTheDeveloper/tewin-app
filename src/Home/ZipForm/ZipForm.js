import React, { useState } from "react";
import "./zipform.css";

function ZipCodeForm({ onZipCodeChange }) {
	const [zipCode, setZipCode] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onZipCodeChange(zipCode);
	};

	return (
		<section className ="zip-form-container">
			<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Enter your zip code here"
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
						className="zipInput"
					/>
				<button type="submit" className = "zipSubmit">Update</button>
			</form>
		</section>
	);
}

export default ZipCodeForm;
