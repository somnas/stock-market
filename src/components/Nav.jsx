import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<ul className="navbar list-unstyled">
			<li className="nav-item">
				<Link className="nav-link" to="/market/crypto">
					Crypto
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/market/currencies">
					Currencies
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/market/indexes">
					Indexes
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/market/markets">
					Markets
				</Link>
			</li>
		</ul>
	);
}
