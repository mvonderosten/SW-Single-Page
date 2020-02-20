import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function People(props) {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					{"Name: "}
					{props.object.name}
					<br /> <br />
					{"Height: "}
					{props.object.height}
					<br /> <br />
					{"Mass: "}
					{props.object.mass}
					<br /> <br />
					{"Skin Color: "}
					{props.object.skin_color}
					<br /> <br />
					{"Hair Color: "}
					{props.object.hair_color}
					<br /> <br />
					{"Eye Color: "}
					{props.object.eye_color}
					<br /> <br />
					{"Birth Year "}
					{props.object.birth_year}
					<br /> <br />
					{"Gender: "}
					{props.object.gender}
					<br /> <br />
				</div>
			</div>
		</div>
	);
}

People.propTypes = {
	swArray: PropTypes.array,
	words: PropTypes.string,
	object: PropTypes.object
};
