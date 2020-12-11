import React, { useState, useEffect } from "react";

export default function Fetch() {
	const url =
		"https://market-data-collector.firebaseio.com/market-collector.json";
	const [marketData, setMarketData] = useState(null);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMarketData(data));
	}, []);
	console.log(marketData);
	return (
		<>
			{!marketData && <p>Loading</p>}
			{marketData && <div>{Object.entries(marketData)}</div>}
		</>
	);
}
