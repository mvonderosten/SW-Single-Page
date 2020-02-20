import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Films } from "../component/films";
import { Species } from "../component/species";
import { People } from "../component/people";
import { Planets } from "../component/planets";
//create your first component
export function Home() {
	const [films, setFilms] = useState([]);
	const [species, setSpecies] = useState([]);
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/planets/")
			.then(resp => resp.json())
			.then(data => {
				setPlanets(data.results);
			});
	}, []);

	useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data.results);
			});
	}, []);

	useEffect(() => {
		fetch("https://swapi.co/api/species/")
			.then(resp => resp.json())
			.then(data => {
				//console.log(data.results);
				setSpecies(data.results);
			});
	}, []);

	useEffect(() => {
		fetch("https://swapi.co/api/films/")
			.then(resp => resp.json())
			.then(data => {
				setFilms(data.results);
			});
	}, []);
	return (
		<>
			<h1>Star Wars</h1>

			<h2>Films</h2>
			<div className="card-body d-flex justify-content-center">
				<div>
					{films.map((item, index) => {
						return (
							<div key={item} className="card-whole">
								<Films object={item} />
							</div>
						);
					})}
				</div>
			</div>
			<h2>Characters</h2>
			<div className="card-body d-flex justify-content-center">
				<div>
					{people.map((item, index) => {
						return (
							<div key={item} className="card-whole">
								<People object={item} />
							</div>
						);
					})}
				</div>
			</div>
			<h2>Species</h2>
			<div className="card-body d-flex justify-content-center">
				<div>
					{species.map((item, index) => {
						return (
							<div key={item} className="card-whole">
								<Species object={item} />
							</div>
						);
					})}
				</div>
			</div>
			<h2>Planets</h2>
			<div className="card-body d-flex justify-content-center">
				<div>
					{planets.map((item, index) => {
						return (
							<div key={item} className="card-whole">
								<Planets object={item} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
