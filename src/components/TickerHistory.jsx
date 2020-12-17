import React from "react";

export default function TickerHistory(props) {
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

	return (
		<div>
			{Object.entries(props).map((item) => {
				let key = item[0];
				let value = item[1];
				console.log(value);
				return (
					// {(!value || value !== undefined) && (
					// 	<div className="history">
					// 		<span>W1:</span>
					// 		<span className={getClass(value.w1)}>{value.w1}%</span>
					// 	</div>
					// )}
					<div className="history">
						<span>{key}:</span>
						<span className={getClass(value)}>
							{getOperator(value)}
							{value}%
						</span>
						{key}: {value}
					</div>
				);
			})}
		</div>
	);
}
