import React from "react";

export default function TickerItem({ value }) {

	function getClass(value) {
		let className = "text-success"
		if (value < 0)  className = "text-danger"
		if (value === 0 ) className = "text-dark"
		return className
	}

	return (
		<div className="tickeritem text-center"> 

			<h1 className="mt-5">{value.name}</h1>
			<h2 className="mb-5">{value.ticker}</h2>

			<div className="item row text-dark mb-3 mr-1 ml-1 p-3 bg-white shadow rounded-lg">
				<div className="col-8 text-left">
					<p className="price">{value.price}</p>
					{(!value.today || value.today !== undefined) &&
						<p className={`today ${getClass(value.today)}`}>{value.today}%</p>
					}
				</div>

				<div className="col-4 text-right my-auto">
					{(!value.w1 || value.w1 !== undefined) &&
						<div className="history"><span>W1:</span><span className={getClass(value.w1)}>{value.w1}%</span></div>
					}
					{(!value.mtd || value.mtd !== undefined) &&
						<div className="history"><span>MTD:</span><span className={getClass(value.mtd)}>{value.mtd}%</span></div>
					}
					{(!value.y3 || value.y3 !== undefined) &&
						<div className="history"><span>Y3:</span><span className={getClass(value.y3)}>{value.y3}%</span></div>
					}
					{(!value.w5 || value.w5 !== undefined) &&
						<div className="history"><span>Y5:</span><span className={getClass(value.y5)}>{value.y5}%</span></div>
					}
					{(!value.ytd || value.ytd !== undefined) &&
						<div className="history"><span>YTD:</span><span className={getClass(value.ytd)}>{value.ytd}%</span></div>
					}
				</div>
			</div>

			{/* Buggar ibland på nollor */}
			{/* {value.y3 && <p>Y3: {value.y3}</p>}
			{value.y5 && <p>Y5: {value.y5}</p>}
			{value.ytd && <p>YTD: {value.ytd}</p>} */}

		</div>
	);
}