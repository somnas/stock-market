import React, { useState, useEffect } from "react";

export default function Fetch({ name }) {
	const url =
		"https://market-data-collector.firebaseio.com/market-collector.json";
	const [marketData, setMarketData] = useState(null);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMarketData(data));
	}, []);
	return (
		<>
			{!marketData && <p>Loading</p>}
			{marketData && console.log(marketData[name].usd)}
		</>
	);
}
