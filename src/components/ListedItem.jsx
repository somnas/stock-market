import React from "react";
import { Link } from "react-router-dom";

const abc = ""

export default function ListedItem({ value, name, marketMarkets }) {

	//IF it's a market
	if(!value.ticker){
		return (
			<>
				<Link
					className="btn btn-secondary bg-primary"
					to={`/market/markets/${name}`}
				>
					{value.name}
				</Link>
			</>
		);
	}

	return (
		<div className=" bg-danger col-12 col-xl-6">
			
			<Link
				className="btn btn-secondary bg-secondary"
				to={marketMarkets 
					? `/market/${name}/${marketMarkets}/${value.ticker}` 
					: `/market/${name}/${value.ticker}`
				}
			>
					<div className="row">
					<div className="col-6">
						{value.name} <br></br>
						{value.ticker}
					</div>
					<div className="col-6">
						{value.price} <br></br>
						{value.today}
					</div>
					</div>
					
			</Link>
			</div>
	);

}
