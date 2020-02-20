import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Planets(props) {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					{"Name: "}
					{props.object.name}
					<br /> <br />
					{"Rotation Period: "}
					{props.object.rotation_period}
					<br /> <br />
					{"Orbital Period "}
					{props.object.orbital_period}
					<br /> <br />
					{"Diameter: "}
					{props.object.diameter}
					<br /> <br />
					{"Climate: "}
					{props.object.climate}
					<br /> <br />
					{"Gravity: "}
					{props.object.gravity}
					<br /> <br />
					{"Terrain: "}
					{props.object.terrain}
					<br /> <br />
					{"Surface Water: "}
					{props.object.surface_water}
					<br /> <br />
					{"Population: "}
					{props.object.population}
					<br /> <br />
				</div>
			</div>
		</div>
	);
}

Planets.propTypes = {
	swArray: PropTypes.array,
	words: PropTypes.string,
	object: PropTypes.object
};
