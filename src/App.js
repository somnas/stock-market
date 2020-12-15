import React from "react";
import { Switch, Route } from "react-router-dom";
// import "./App.css";
import HomePage from "./pages/HomePage";
import TickerPage from "./pages/TickerPage";
import ListPage from "./pages/ListPage";

function App() {
	return (
		<div className="container">
			<Switch>
				<Route
					exact
					path="/market/:name/:marketMarkets/:id"
					component={TickerPage}
				/>

				<Route exact path="/market/markets/:name" component={ListPage} />

				<Route path="/market/:name/:id" component={TickerPage} />

				<Route path="/market/:name" component={ListPage} />

				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
