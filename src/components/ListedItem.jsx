import React from "react";
import { Link } from "react-router-dom";

export default function ListedItem({ value, name, marketMarkets }) {

	//IF it's a market
	if(!value.ticker){
		return (
			<div className=" col-lg-12 box">
				<Link
					className="no-underline"
					to={`/market/markets/${name}`}
				>
					<div className="row text-dark mb-3 mr-1 ml-1 p-3 bg-white shadow rounded-lg listitem">
						{value.name}
					</div>
				</Link>
			</div>
		);
	}

	return (
		<div className=" col-lg-6 box">
			<div>
			<Link
				className="no-underline"
				to={marketMarkets 
					? `/market/${name}/${marketMarkets}/${value.ticker}` 
					: `/market/${name}/${value.ticker}`
				}
			>
					<div className="row text-dark mb-3 mr-1 ml-1 p-3 bg-white shadow rounded-lg listitem">

						<div className="col-8 col-xl-9 test">
							<h3>{value.name}</h3>
							({value.ticker})
						</div>
						<div className="col-4 col-xl-3 text-right" z-index="1000">
							<h3>{value.price}</h3>

							{value.today > 0 &&
							<div className="text-success">{value.today}%</div>
							}
							{value.today === 0 &&
							<div className="text-dark">{value.today}%</div>
							}
							{value.today < 0 &&
							<div className="text-danger">{value.today}%</div>
							}
							
						</div>
					</div>
					
			</Link>
			</div>
		</div>
	);

}
