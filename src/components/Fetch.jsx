import React, { useState, useEffect } from "react";

export default function Fetch({ name, subName = "" }) {
	const url =
		"https://market-data-collector.firebaseio.com/market-collector.json";
	const [marketData, setMarketData] = useState(null);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMarketData(data));
	}, []);
	if (name === "crypto") subName = "usd";
	if (name === "currencies") subName = "sek";
	if (name === "indexes") subName = "se";
	return (
		<>
			{!marketData && <p>Loading</p>}
			{marketData && console.log(marketData[name][subName])}
		</>
	);
}
