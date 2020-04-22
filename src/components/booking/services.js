import React, {useState} from "react";

export default function Services() {
	const [service, setService] = useState("");

	return (
		<div id={'booking-service-content-container'}>
			<h2 id={'booking-service-title'}>Which service does your pup need?</h2>
			<div id={'booking-service-icon-container'}>
				<div className={'booking-service-walk-icon'}>
					<img src={'/src/assets/walk.png'} alt={'walk'}/>
					<p>Walk</p>
				</div>
				<div className={'booking-service-groom-icon'}>
					<img src={'/src/assets/groom.png'} alt={'groom'}/>
					<p>Groom</p>
				</div>
				<div className={'booking-service-overnight-icon'}>
					<img src={'/src/assets/overnight.png'} alt={'overnight'}/>
					<p>Overnight</p>
				</div>
			</div>
			<button>Continue</button>
		</div>
	);
};
