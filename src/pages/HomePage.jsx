import React from "react";
import Nav from "../components/Nav";
import logo from '../img/logo.svg';


export default function HomePage() {
	return (
		<div >
			<img src={logo}className=" logo"/>
			<div className="d-flex vh-100 align-items-center flex-flow-column">
				<div className="homepage w-100">
					<Nav/>
				</div>
			</div>
		</div>
	);
}





