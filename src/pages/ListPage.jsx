import React from "react";
import Fetch from "../components/Fetch";
import logo from "../img/logo.svg";

import Nav from "../components/Nav";
import StyledNav from "../styled/StyledNav";
import StyledLogo from "../styled/StyledLogo";

export default function ListPage() {
	const name = window.location.pathname.split("/")[2];
	const marketMarkets = window.location.pathname.split("/")[3];

	return (
		<div className="listpage">
			<StyledLogo>
				<img src={logo} alt="Stock Market" />
			</StyledLogo>
			<StyledNav listPage={true}>
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
