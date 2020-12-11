import React from "react";

export default function TickerPage() {
	const ticker = window.location.pathname.split("/")[2];

	return (
		<div>
			<h2>{ticker}</h2>
		</div>
	);
}
