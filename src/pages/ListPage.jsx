import React from "react";
import Fetch from "../components/Fetch";
import logo from "../img/logo.svg";
import Logo from "../components/Logo";

import Nav from "../components/Nav";
import { StyledListPage } from "../styled/StyledListPage";
import StyledNav from "../styled/StyledNav";
import StyledLogo from "../styled/StyledLogo";

export default function ListPage() {
	const name = window.location.pathname.split("/")[2];
	const marketMarkets = window.location.pathname.split("/")[3];

	return (
		<StyledListPage>
			<>
				<StyledLogo>
					<Logo>
						<img src={logo} alt="Stock Market" />
					</Logo>
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
			</>
		</StyledListPage>
	);
}
