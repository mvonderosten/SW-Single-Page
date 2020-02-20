import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Species } from "../component/species";
//create your first component
export function Home() {
	const [species, setSpecies] = useState([2, 3, 4, 15]);

	useEffect(() => {
		fetch("https://swapi.co/api/species/")
			.then(resp => resp.json())
			.then(data => {
				//console.log(data.results);
				setSpecies(data.results);
			});
	}, []);

	return (
		<>
			<h1>Star Wars Species</h1>
			<div className="card-body d-flex justify-content-center">
				<div>
					{species.map((item, index) => {
						return (
							<div key={index} className="card-whole">
								<Species
									words="Language: "
                                    object={item}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
