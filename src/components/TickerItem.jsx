import React from "react";

export default function TickerItem({ value }) {

	console.log(value.y3)

	return (
		<div>
			
			<h1>{value.name}</h1>
			<h2>{value.ticker}</h2>
			<h3>Price: {value.price}</h3>

			{value.today === 0 || value.today === undefined ?  "" : <p>Today: {value.today}</p>}
			{value.w1 === 0 || value.w1 === undefined ?  "" : <p>W1: {value.w1}</p>}
			{value.mtd === 0 || value.mtd === undefined ?  "" : <p>MTD: {value.mtd}</p>}
			{value.y3 === 0 || value.y3 === undefined ?  "" : <p>Y3: {value.y3}</p>}
			{value.y5 === 0 || value.y5 === undefined ? "" : <p>Y5: {value.y5}</p>}
			{value.ytd === 0 || value.ytd === undefined ? "" : <p>YTD: {value.ytd}</p>}

			{/* Buggar ibland på nollor */}
			{/* {value.y3 && <p>Y3: {value.y3}</p>}
			{value.y5 && <p>Y5: {value.y5}</p>}
			{value.ytd && <p>YTD: {value.ytd}</p>} */}

		</div>
	);
}

// "mtd": 1.74,
// "name": "Emiratisk dirham",
// "price": 2.5,
// "ticker": "AEDSEK-IDCFX",
// "today": 0.926,
// "w1": 1.51,
// "y3": 0.0,
// "y5": 0.0,
// "ytd": 0.0

// "omni_ticker": "X%3ASAEDSEK.IDCFX",
// "source": "AMMI",
// "link": "/instrument/X%3ASAEDSEK.IDCFX",
// "market": "sek",
