import React, { useState, useEffect } from "react";
import ListedItem from "./ListedItem";
import TickerItem from "./TickerItem";
import Spinner from "react-bootstrap/Spinner";

export default function Fetch({
	name,
	subName = null,
	ticker = null,
	marketMarkets = null,
}) {
	const url =
		"https://market-data-collector.firebaseio.com/market-collector.json";
	const [marketData, setMarketData] = useState(null);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMarketData(data));
	}, []);

	//moved loading outside other returns
	if (!marketData)
		return (
			<div className="spinspin">
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		);

	if (name === "crypto") subName = "usd";
	if (name === "currencies") subName = "sek";
	if (name === "indexes") subName = "se";

	try {
		if (name === "markets" && marketMarkets && !ticker) {
			return (
				<>
					{marketData &&
						Object.entries(marketData[name][marketMarkets]).map((item) => {
							return (
								<ListedItem
									key={item[0]}
									value={item[1]}
									name={name}
									marketMarkets={marketMarkets}
								/>
							);
						})}
				</>
			);
		}

		if (marketMarkets && ticker) {
			return (
				<>
					{marketData && (
						<TickerItem value={marketData[name][marketMarkets][ticker]} />
					)}
				</>
			);
		}

		if (name === "markets") {
			return (
				<>
					{marketData &&
						Object.entries(marketData[name]).map((item) => {
							return (
								<ListedItem
									key={item[0]}
									value={{ name: item[0] }}
									name={item[0]}
								/>
							);
						})}
				</>
			);
		}

		if (ticker) {
			return (
				<>
					{marketData && (
						<TickerItem value={marketData[name][subName][ticker]} />
					)}
				</>
			);
		}

		return (
			<>
				{marketData &&
					Object.entries(marketData[name][subName]).map((item) => {
						return <ListedItem key={item[0]} value={item[1]} name={name} />;
					})}
			</>
		);
	} catch {
		return "Något gick fel... 😢";
	}
}
