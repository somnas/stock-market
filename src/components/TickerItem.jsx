import React from "react";

export default function TickerItem({ value }) {

	function getClass(value) {
		let className = "text-success";
		if (value < 0)  className = "text-danger"
		if (value === 0 ) className = "text-dark"
		return className
	}

	return (
		<div>

			<h1 className="text-center mt-5">{value.name}</h1>
			<h2 className="text-center mb-5">{value.ticker}</h2>


			<div className="tickeritem row text-dark mb-3 mr-1 ml-1 p-3 bg-white shadow rounded-lg">
				<div className="col-8">
					<p className="price">{value.price}</p>
					{value.today === 0 || value.today === undefined ?  "" : <p className={`today ${getClass(value.today)}`}>{value.today}%</p>}
				</div>

				<div className="col-4 text-right">
					{value.w1 === 0 || value.w1 === undefined ?  "" : <div className="ticker-history"> <span>W1:</span> <span className={getClass(value.w1)}>{value.w1}%</span></div>}
					{value.mtd === 0 || value.mtd === undefined ?  "" : <div className="ticker-history"> <span>MTD:</span> <span className={getClass(value.mtd)}>{value.mtd}%</span></div>}
					{value.y3 === 0 || value.y3 === undefined ?  "" : <div className="ticker-history"> <span>Y3:</span> <span className={getClass(value.y3)}>{value.y3}%</span></div>}
					{value.y5 === 0 || value.y5 === undefined ? "" : <div className="ticker-history"> <span>Y5:</span> <span className={getClass(value.y5)}>{value.y5}%</span></div>}
					{value.ytd === 0 || value.ytd === undefined ? "" : <div className="ticker-history"> <span>YTD:</span> <span className={getClass(value.ytd)}>{value.ytd}%</span></div>}
				</div>
			</div>

			{/* Buggar ibland på nollor */}
			{/* {value.y3 && <p>Y3: {value.y3}</p>}
			{value.y5 && <p>Y5: {value.y5}</p>}
			{value.ytd && <p>YTD: {value.ytd}</p>} */}

		</div>
	);
}