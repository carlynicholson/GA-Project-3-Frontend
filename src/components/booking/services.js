import React, {useState} from "react";

export default function BookService() {
	const [service, setService] = useState("");

	return (
		<div id={'booking-service-content-container'}>
			<h2 id={'booking-service-title'}>Which service does your pup need?</h2>
			<div id={'booking-service-icon-container'}>
				<div className={'booking-service-walk-icon'}>Walk</div>
				<div className={'booking-service-groom-icon'}>Groom</div>
				<div className={'booking-service-overnight-icon'}>Overnight</div>
			</div>
			<button>Continue</button>
		</div>
	);
};
