import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cloud from "../images/cloud1.png";
import "./landing.css";

function Landing() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event) => {
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		const offsetX = (centerX - event.clientX) * 0.04; // Adjust the multiplier to control the movement intensity
		const offsetY = (centerY - event.clientY) * 0.04;

		setPosition({ x: offsetX, y: offsetY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// Conditionally apply the transform property based on screen size
	const isDesktop = window.innerWidth >= 1024; // Define your desktop breakpoint
	const transformStyle = isDesktop
		? {
				transform: `translate(${position.x}px, ${position.y}px)`,
		  }
		: {};

	return (
		<div className="landingPage">
			<div className="enter-wrapper">
				<Link to="/tewin-app/home" className="overlayLink">
					<h1 className="overlayText">Enter</h1>
				</Link>
			</div>
			<div className="imageWrapper">
				<div className="imageContainer" style={transformStyle}>
					<img src={cloud} alt="cloud" />
				</div>
			</div>
		</div>
	);
}

export default Landing;
