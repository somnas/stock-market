import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="nav justify-content-between shadow">
			<Link className="nav-link" to="/market/crypto">
				Crypto
			</Link>
			<Link className="nav-link" to="/market/currencies">
				Currencies
			</Link>
			<Link className="nav-link" to="/market/indexes">
				Indexes
			</Link>
			<Link className="nav-link" to="/market/markets">
				Markets
			</Link>
		</nav>
	);
}
