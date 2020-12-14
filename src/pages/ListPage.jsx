import React from "react";
import Fetch from "../components/Fetch";

export default function ListPage() {
	const name = window.location.pathname.split("/")[2];
	const marketMarkets = window.location.pathname.split("/")[3];

	console.log('this is listpage!')
	console.log("name: "+ name);
	console.log(marketMarkets)

	return (
		<div>
			<h2>{marketMarkets ? name +' > '+ marketMarkets : name }</h2>
			<div className="row">
				<Fetch name={name} marketMarkets={marketMarkets}  />
			</div>
		</div>
	);
}
