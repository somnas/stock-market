import React from "react";
import Fetch from "../components/Fetch";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import StyledNav from "../styled/StyledNav";

export default function ListPage(props) {
	const name = props.match.params.name;
	const marketMarkets = props.match.params.marketMarkets;

	return (
		<div className="listpage">
			<Logo />
			<StyledNav>
				<Nav />
			</StyledNav>
			<h1 className="mb-5 mt-5">
				{marketMarkets ? name + " > " + marketMarkets : name}
			</h1>
			<div className="row">
				<Fetch name={name} marketMarkets={marketMarkets} />
			</div>
		</div>
	);
}
