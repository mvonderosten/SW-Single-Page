import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Species(props) {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					{props.object.name}
					{props.object.classification}
					{props.object.designation}
					{/* {props.design}
					{props.avHeight}
					{props.sColor}
					{props.hColor}
					{props.eColor}
					{props.aveLifespan}
					{props.lan} */}
				</div>
			</div>
		</div>
	);
}

Species.propTypes = {
	swArray: PropTypes.array,
	words: PropTypes.string,
	object: PropTypes.object,
	nam: PropTypes.array,
	classi: PropTypes.array,
	design: PropTypes.array,
	avHeight: PropTypes.array,
	sColor: PropTypes.array,
	hColor: PropTypes.array,
	eColor: PropTypes.array,
	aveLifespan: PropTypes.array,
	lan: PropTypes.array
};
