import React from "react";
import Fetch from "../components/Fetch";

export default function ListPage() {
	const name = window.location.pathname.split("/")[2];

	return (
		<div>
			<h2>{name}</h2>
			<Fetch name={name} />
		</div>
	);
}
