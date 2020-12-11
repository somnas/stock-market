import React, { useState, useEffect } from "react";
import Fetch from "../components/Fetch";

export default function TickerPage() {
	const ticker = window.location.pathname.split("/")[2];

	return (
		<div>
			<h2>{ticker}</h2>
			<Fetch ticker={ticker} />
		</div>
	);
}
