import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Species(props) {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					{"Name: "}
					{props.object.name}
					<br />
					{"Classification: "}
					{props.object.classification}
					<br />
					{"Desugnation: "}
					{props.object.designation}
					<br />
					{"Average Height: "}
					{props.object.average_height}
					<br />
					{"Skin Color: "}
					{props.object.skin_colors}
					<br />
					{"Hair Color: "}
					{props.object.hair_colors}
					<br />
					{"Eye Color: "}
					{props.object.eye_colors}
					<br />
					{"Average Lifespn: "}
					{props.object.average_lifespan}
					<br />
					{"Language: "}
					{props.object.language}
					<br />
				</div>
			</div>
		</div>
	);
}

Species.propTypes = {
	swArray: PropTypes.array,
	words: PropTypes.string,
	object: PropTypes.object
};
