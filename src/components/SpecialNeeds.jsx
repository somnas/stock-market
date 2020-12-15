import React from "react";
import trump from "../specialNeeds/trump_2.jpg";
import horn from "../specialNeeds/horn.mp3";

export default function SpecialNeeds() {
	const audio_correct = new Audio(horn);
	return (
		<div className="d-flex  justify-content-center">
			<div className="w-50">
				<img className="hero img-fluid " src={trump} alt="Trump" />
				<audio controls className="w-100">
					<source src={horn} type="audio/mpeg" />
				</audio>
			</div>

			{/* {audio_correct.play()} */}
		</div>
	);
}
