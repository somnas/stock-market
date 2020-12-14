import React from "react";
import Nav from "../components/Nav";
import logo from '../img/logo.svg';


export default function HomePage() {
	return (
		<div className="homepage">
			<img src={logo} className="logo" alt="Stock Market"/>
			<div className="d-flex vh-100 align-items-center flex-flow-column">
				<div className="w-100">
					<Nav/>
				</div>
			</div>
		</div>
	);

}