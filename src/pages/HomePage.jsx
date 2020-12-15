import React from "react";
import Nav from "../components/Nav";
import SpecialNeeds from "../components/SpecialNeeds";
import logo from "../img/logo.svg";
import StyledNav from "../styled/StyledNav";

export default function HomePage() {
	return (
		<div className="homepage">
			<img src={logo} className="logo" alt="Stock Market" />
			<div className="d-flex vh-100 align-items-center flex-flow-column">
				<div className="w-100">
					<StyledNav>
						<Nav />
					</StyledNav>
				</div>
			</div>
			<SpecialNeeds />
		</div>
	);
}
