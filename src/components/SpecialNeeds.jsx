import React from "react";
import trump from "../specialNeeds/trump_3.jpg";
import horn from "../specialNeeds/horn.mp3";

export default function SpecialNeeds() {
	return (
		<div className="d-flex  justify-content-center ">
			<div style={{ maxWidth: "400px" }}>
				<img
					style={{ marginTop: "3rem" }}
					className="img-fluid "
					src={trump}
					alt="Trump"
				/>
				<audio controls autoPlay className="w-100">
					<source src={horn} type="audio/mpeg" />
				</audio>
			</div>
		</div>
	);
}
