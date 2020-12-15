import React from "react";
import trump from "../specialNeeds/trump_2.jpg";
import horn from "../specialNeeds/horn.mp3";

export default function SpecialNeeds() {
	const audio_correct = new Audio(horn);
	return (
		<div>
			<img className="hero img-fluid" src={trump} alt="Trump" />
			<p>FRAUD, MEXICO, WALL</p>
			<audio controls autoPlay>
				<source src={horn} type="audio/mpeg" />
			</audio>
			{/* {audio_correct.play()} */}
		</div>
	);
}
