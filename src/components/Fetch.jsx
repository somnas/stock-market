import React, { useState, useEffect } from "react";
import ListedItem from "./ListedItem";

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
			{marketData &&
				Object.entries(marketData[name][subName]).map((item) => {
					return <ListedItem key={item[0]} value={item[1]} />;
				})}
		</>
	);
}
