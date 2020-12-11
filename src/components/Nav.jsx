import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<ul className="navbar list-unstyled">
			<li className="nav-item">
				<Link className="nav-link" to="/">
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/market/name">
					List
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/markets">
					Markets
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/ticker/id">
					Ticker
				</Link>
			</li>
		</ul>
	);
}
