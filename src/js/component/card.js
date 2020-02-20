import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Card() {
	const [species, setSpecies] = useState([2, 3, 4, 15]);

	
	return (
		<div>
			{species.map((item, index) => {
				return (
					<div key={index} className="card">
						<div className="card-body">Name: {item.name}</div>
						<div className="card-body">
							Classification: {item.classification}
						</div>
						<div className="card-body">
							Designation: {item.designation}
						</div>
						<div className="card-body">
							Average Height: {item.average_height}
						</div>
						<div className="card-body">
							Skin Color: {item.skin_colors}
						</div>
						<div className="card-body">
							Hair Color: {item.hair_colors}
						</div>
						<div className="card-body">
							Eye Color: {item.eye_colors}
						</div>
						<div className="card-body">
							Average Lifespan: {item.average_lifespan}
						</div>
						<div className="card-body">
							Language: {item.language}
						</div>
					</div>
				);
			})}
		</div>
	);
}

Card.propTypes = {
	swArray: PropTypes.array
};
