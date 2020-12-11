import React, { useState, useEffect } from "react";
import ListedItem from "./ListedItem";
import TickerItem from "./TickerItem";

export default function Fetch({ name, subName = "", ticker = null }) {
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

	// <TickerItem key={item[0]} value={item[1]} />
	if (ticker) {
		return (
			<>
				{!marketData && <p>Loading</p>}
				{marketData && <TickerItem value={marketData[name][subName][ticker]} />}
			</>
		);
	}

	return (
		<>
			{!marketData && <p>Loading</p>}
			{marketData &&
				Object.entries(marketData[name][subName]).map((item) => {
					return <ListedItem key={item[0]} value={item[1]} name={name} />;
				})}
		</>
	);
}
