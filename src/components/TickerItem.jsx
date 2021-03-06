import React from "react";
import { StyledTickerItem } from "../styled/StyledTickerItem";
import TickerHistory from "../components/TickerHistory";
import { getClass, getOperator } from "../Library";

export default function TickerItem({ value }) {
	if (!value) {
		return "Nej va tråkigt, det blev visst fel 😰";
	}

	return (
		<StyledTickerItem className="tickeritem text-center">
			<h1 className="mt-5">{value.name}</h1>
			<h2 className="mb-5">{value.ticker}</h2>

			<div className="item row text-dark mb-3 mr-1 ml-1 p-3 bg-white shadow rounded-lg">
				<div className="col-8 text-left">
					<p className="price">{value.price}</p>
					{(!value.today || value.today !== undefined) && (
						<p className={`today ${getClass(value.today)}`}>
							{`${getOperator(value.today)}${value.today}`}%
						</p>
					)}
				</div>

				<div className="col-4 text-right my-auto">
					<TickerHistory
						w1={value.w1}
						mtd={value.mtd}
						y3={value.y3}
						y5={value.y5}
						ytd={value.ytd}
						getClass={getClass}
						getOperator={getOperator}
					/>
				</div>
			</div>
		</StyledTickerItem>
	);
}
