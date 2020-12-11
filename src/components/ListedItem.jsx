import React from "react";
import { Link } from "react-router-dom";

export default function ListedItem({ value }) {
	return (
		<div>
			<Link className="btn btn-secondary" to={`/ticker/${value.ticker}`}>
				{value.ticker}
			</Link>
		</div>
	);
}
