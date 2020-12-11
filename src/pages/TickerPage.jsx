import React, { useState, useEffect } from "react";
import Fetch from "../components/Fetch";

export default function TickerPage(props) {
	const ticker = props.match.params.id;
	const name = props.match.params.name;
	console.log(name);

	return (
		<div>
			<Fetch ticker={ticker} name={name} />
		</div>
	);
}
