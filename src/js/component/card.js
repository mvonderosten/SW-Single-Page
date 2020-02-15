import React, { useState, useEffect } from "react";

export function Card() {
	const [species, setSpecies] = useState([2, 3, 4, 15]);

	useEffect(() => {
		fetch("https://swapi.co/api/species/")
			.then(resp => resp.json())
			.then(data => {
				console.log(data.results);
				setSpecies(data.results);
			});
	}, []);

	return (
		<div>
			{species.map((item, index) => {
				return (
					<div key={index} className="card">
						<div className="card-body">{item.name}</div>
					</div>
				);
			})}
		</div>
	);
}
