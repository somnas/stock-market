import React from "react";
import { Link } from "react-router-dom";

export default function ListedItem({ value, name }) {
	return (
		<div>
			<Link
				className="btn btn-secondary"
				to={`/market/${name}/${value.ticker}`}
			>
				{value.ticker}
			</Link>
		</div>
	);
}
