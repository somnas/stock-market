import React from "react";
import Fetch from "../components/Fetch";
import Nav from "../components/Nav";

export default function ListPage() {

	const name = window.location.pathname.split("/")[2];
	const marketMarkets = window.location.pathname.split("/")[3];

	return (
		<div className="listpage">
			<Nav/>
			<h1 className="mb-5 mt-5">{marketMarkets 
				? name +' > '+ marketMarkets 
				: name }
			</h1>
			<div className="row">
				<Fetch name={name} marketMarkets={marketMarkets}  />
			</div>
		</div>
	);

}