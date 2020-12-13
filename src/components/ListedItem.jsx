import React from "react";
import { Link } from "react-router-dom";

export default function ListedItem({ value, name, marketMarkets }) {

	//IF it's a market
	if(!value.ticker){
		return (
			<>
				<Link
					className="btn btn-secondary"
					to={`/market/markets/${name}`}
				>
					{value.name}
				</Link>
			</>
		);
	}

	//IF it's a marketMarkets
	if(marketMarkets){
		console.log(value.name.length)
		return (
			<>
				{value.name.length > 0 &&
				<Link
					className="btn btn-secondary"
					to={`/market/${name}/${marketMarkets}/${value.ticker}`}
				>
					{value.name}
				</Link>
				}
			</>
		);
	}

	return (
		<>
			<Link
				className="btn btn-secondary"
				to={`/market/${name}/${value.ticker}`}
			>
				{value.name}
			</Link>
		</>
	);
}
