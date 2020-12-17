import React from "react";
import { Link } from "react-router-dom";
import { StyledListedItem } from "../styled/StyledListedItem";

function getClass(value) {
	let className = "text-success";
	if (value < 0) className = "text-danger";
	if (value === 0) className = "text-dark";
	return className;
}

export default function ListedItem({ value, name, marketMarkets }) {
	//if nameless, stop!
	if (value.name.length === 0) return <></>;

	//if markets is clicked
	if (!value.ticker) {
		return (
			<div className="col-lg-12 listitem">
				<StyledListedItem market={true}>
					<Link className="no-underline" to={`/market/markets/${name}`}>
						<div className="row mb-3 mr-1 ml-1 p-3 shadow rounded-lg marketitem text-center">
							{value.name}
						</div>
					</Link>
				</StyledListedItem>
			</div>
		);
	}

	//else list tickeritems
	return (
		<div className="col-lg-6">
			<StyledListedItem tickerItem={true}>
				<Link
					className="no-underline"
					to={
						marketMarkets
							? `/market/${name}/${marketMarkets}/${value.ticker}`
							: `/market/${name}/${value.ticker}`
					}
				>
					<div className="row text-dark mb-3 mr-1 ml-1 p-3 shadow rounded-lg listitem">
						<div className="col-8 col-xl-9 nowrap">
							<h3>{value.name}</h3>({value.ticker})
						</div>
						<div className="col-4 col-xl-3 text-right">
							<h3>{value.price}</h3>
							<div className={getClass(value.today)}>{value.today}%</div>
						</div>
					</div>
				</Link>
			</StyledListedItem>
		</div>
	);
}
