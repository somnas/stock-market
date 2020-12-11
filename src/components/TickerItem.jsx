import React from "react";

export default function TickerItem({ value }) {
	console.log(value);
	return (
		<div>
			<h1>{value.ticker}</h1>
			<p>{value.price}</p>
		</div>
	);
}
