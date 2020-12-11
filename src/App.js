import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MarketPage from "./pages/MarketPage";
import TickerPage from "./pages/TickerPage";
import ListPage from "./pages/ListPage";

function App() {
	return (
		<div>
			<Switch>
				<Route path="/ticker/:id" component={TickerPage} />
				<Route path="/markets">
					<MarketPage />
				</Route>
				<Route path="/market/:name" component={ListPage} />
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
