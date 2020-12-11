import React from "react";

export default function TickerItem({ value }) {
	return (
		<div>
			<h1>{value.ticker}</h1>
			<h2>Price: {value.price}</h2>
			{value.today && <p>Today: {value.today}</p>}
			{value.w1 && <p>W1: {value.w1}</p>}
			{value.mtd && <p>MTD: {value.mtd}</p>}

			{/* Buggar ibland på nollor */}
			{value.y3 && <p>Y3: {value.y3}</p>}
			{value.y5 && <p>Y5: {value.y5}</p>}
			{value.ytd && <p>YTD: {value.ytd}</p>}
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
