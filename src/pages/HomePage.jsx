import React from "react";
import Nav from "../components/Nav";
import SpecialNeeds from "../components/SpecialNeeds";
import logo from "../img/logo.svg";
import StyledNav from "../styled/StyledNav";
import StyledLogo from "../styled/StyledLogo";
export default function HomePage() {
	return (
		<>
			<div className="d-flex vh-100 align-items-center flex-flow-column flex-column justify-content-start">
				<StyledLogo frontpage={true}>
					<img src={logo} alt="Stock Market" />
				</StyledLogo>
				<div className="w-100">
					<StyledNav>
						<Nav />
					</StyledNav>
				</div>
				<SpecialNeeds />
			</div>
		</>
	);
}
