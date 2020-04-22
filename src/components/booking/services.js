import React, {useContext} from "react";
import walkIcon from '../../assets/walk.png';
import groomIcon from '../../assets/groom.png';
import overnightIcon from '../../assets/overnight.png';
import logo from '../../assets/logo-color.png';
import {AppContext} from "../../App";
import {Link} from "react-router-dom";

export default function Services() {
	const appProps = useContext(AppContext);

	return (
		<div id={'booking-service-content-container'}>
			<img src={logo}/>
			<h2 id={'booking-service-title'}>Which service does your pup need?</h2>
			<div id={'booking-service-icon-container'}>
				<div className={'booking-service-walk-icon'}>
					<img src={walkIcon}
					     alt={'walk'}
					     onClick={ () => appProps.handleServiceClick('walk')}/>
					<p>Walk</p>
				</div>
				<div className={'booking-service-groom-icon'}>
					<img src={groomIcon}
					     alt={'groom'}
					     onClick={ () => appProps.handleServiceClick('groom')}/>
					<p>Groom</p>
				</div>
				<div className={'booking-service-overnight-icon'}>
					<img src={overnightIcon}
					     alt={'overnight'}
					     onClick={ () => appProps.handleServiceClick('overnight')}/>
					<p>Overnight</p>
				</div>
			</div>
			<Link to={'/calendar'}>
				<button>Continue</button>
			</Link>
		</div>
	);
};
