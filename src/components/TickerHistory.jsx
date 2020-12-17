import React from "react";

export default function TickerHistory({ getClass, getOperator, ...props }) {
	return (
		<div>
			{Object.entries(props).map((item) => {
				let key = item[0];
				let value = item[1];
				return (
					(value || value !== undefined) && (
						<div className="history">
							<span>{key.toUpperCase()}:</span>
							<span className={getClass(value)}>
								{getOperator(value)}
								{value}%
							</span>
						</div>
					)
				);
			})}
		</div>
	);
}
