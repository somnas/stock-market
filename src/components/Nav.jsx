import React from "react";
import { Link } from "react-router-dom";
import {
	cryptoSVG,
	currenciesSVG,
	indexesSVG,
	marketsSVG,
} from "../img/icons.jsx";
import StyledLink from "../styled/StyledLink";

export default function Nav() {
	return (
		<nav className="nav justify-content-between">
			<Link className="nav-link" to="/market/crypto">
				<StyledLink>
					{cryptoSVG}
					Crypto
				</StyledLink>
			</Link>
			<Link className="nav-link" to="/market/currencies">
				<StyledLink>
					{currenciesSVG}
					Currencies
				</StyledLink>
			</Link>
			<Link className="nav-link" to="/market/indexes">
				<StyledLink>
					{indexesSVG}
					Indexes
				</StyledLink>
			</Link>
			<Link className="nav-link" to="/market/markets">
				<StyledLink>{marketsSVG} Markets</StyledLink>
			</Link>
		</nav>
	);
}
