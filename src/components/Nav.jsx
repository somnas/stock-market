import React from "react";
import { Link } from "react-router-dom";
import iconCrypto from '../img/icons/crypto.png';
import iconCurrencies from '../img/icons/currencies.png';
import iconIndexes from '../img/icons/indexes.png';
import iconMarkets from '../img/icons/markets.png';
import StyledLink from '../styled/StyledLink'

export default function Nav() {
	return (
		<nav className="nav justify-content-between">
			<Link className="nav-link" to="/market/crypto">
				<StyledLink>
					<img src={iconCrypto} alt="Crypto"/>
					Crypto		
				</StyledLink>
			</Link>
			<Link className="nav-link" to="/market/currencies">
				<StyledLink>
					<img src={iconCurrencies} alt="Currencies"/>
					Currencies	
				</StyledLink>
			</Link>
			<Link className="nav-link" to="/market/indexes">
				<StyledLink>
					<img src={iconIndexes} alt="Indexes"/>
					Indexes		
				</StyledLink>
			</Link>
			<Link className="nav-link" to="/market/markets">
				<StyledLink>
					<img src={iconMarkets} alt="Markets"/>
					Markets
				</StyledLink>
			</Link>
		</nav>
	);
}
