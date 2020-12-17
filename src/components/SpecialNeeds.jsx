import React from "react";
import trump from "../specialNeeds/trump_2.jpg";
import horn from "../specialNeeds/horn.mp3";

export default function SpecialNeeds() {
	return (
		<div className="d-flex  justify-content-center ">
			<div style={{ maxWidth: "400px" }}>
				<img className="img-fluid " src={trump} alt="Trump" />
				<audio controls className="w-100">
					<source src={horn} type="audio/mpeg" />
				</audio>
			</div>
		</div>
	);
}
