import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Films(props) {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					{"Title: "}
					{props.object.title}
					<br /> <br />
					{"Episode: "}
					{props.object.episode_id}
					<br /> <br />
					{"Opening Crawl: "}
					{props.object.opening_crawl}
					<br /> <br />
					{"Director: "}
					{props.object.director}
					<br /> <br />
					{"Producer: "}
					{props.object.producer}
					<br /> <br />
					{"Release Date: "}
					{props.object.release_date}
					<br /> <br />
				</div>
			</div>
		</div>
	);
}

Films.propTypes = {
	swArray: PropTypes.array,
	words: PropTypes.string,
	object: PropTypes.object
};
