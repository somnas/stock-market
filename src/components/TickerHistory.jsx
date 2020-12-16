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
				console.log(item);
				let key = item[0];
				let value = item[1];
				return (
					<div>
						{key}: {value}
					</div>
				);
			})}
		</div>
	);
}
