import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "../component/card";
//create your first component
export function Home() {
	return (
		<>
			<h1>Star Wars Species</h1>
			<Card swArray="name" />
		</>
	);
}
