import React from "react";
import { StyledTickerItem } from "../styled/StyledTickerItem";
import TickerHistory from "../components/TickerHistory";

export default function TickerItem({ value }) {
	function getClass(value) {
		let className = "text-success";
		if (value < 0) className = "text-danger";
		if (value === 0) className = "text-dark";
		return className;
	}
	function getOperator(value) {
		let operator = "";
		if (value > 0) operator = "+";
		return operator;
	}

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
					/>
					{(!value.w1 || value.w1 !== undefined) && (
						<div className="history">
							<span>W1:</span>
							<span className={getClass(value.w1)}>{value.w1}%</span>
						</div>
					)}
					{(!value.mtd || value.mtd !== undefined) && (
						<div className="history">
							<span>MTD:</span>
							<span className={getClass(value.mtd)}>{value.mtd}%</span>
						</div>
					)}
					{(!value.y3 || value.y3 !== undefined) && (
						<div className="history">
							<span>Y3:</span>
							<span className={getClass(value.y3)}>{value.y3}%</span>
						</div>
					)}
					{(!value.y5 || value.y5 !== undefined) && (
						<div className="history">
							<span>Y5:</span>
							<span className={getClass(value.y5)}>{value.y5}%</span>
						</div>
					)}
					{(!value.ytd || value.ytd !== undefined) && (
						<div className="history">
							<span>YTD:</span>
							<span className={getClass(value.ytd)}>{value.ytd}%</span>
						</div>
					)}
				</div>
			</div>
		</StyledTickerItem>
	);
}
