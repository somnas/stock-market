import React from "react";
import { Link } from "react-router-dom";

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
		<div className=" col-lg-6 box">
			<div>
			<Link
				className="no-underline"
				to={marketMarkets 
					? `/market/${name}/${marketMarkets}/${value.ticker}` 
					: `/market/${name}/${value.ticker}`
				}
			>
					<div className="row text-dark mb-3 mr-1 ml-1 p-3 bg-white shadow rounded-lg">

						<div className="col-8">
							<h3>{value.name}</h3>
							({value.ticker})
						</div>
						<div className="col-4 text-right">
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
