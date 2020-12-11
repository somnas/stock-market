import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<div>
			<h1>test</h1>
			<Switch>
				<Route path="/home">
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
