import React, {useContext} from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import logo from '../../assets/logo-color.png';
import {AppContext} from "../../App";
import {Link} from "react-router-dom";

function CalendarApp() {
	const appProps = useContext(AppContext)
	console.log(appProps.date);
	console.log(appProps.localProviders);
	console.log(appProps.appointmentTime)

	return (
		<div>
			<img src={logo} alt={'logo'}/>
			<h2>{appProps.service}</h2>
			<h3>Select a date/time.</h3>
			<div id={'calendar-container'}>
				<Calendar
					onChange={appProps.onDateClick}
					value={appProps.date}
				/>
			</div>
			<div>
				<TimePicker
					onChange={appProps.onTimeChange}
					value={appProps.appointmentTime}
				/>
			</div>
			<Link to={'/localproviders'}>
				<button>Continue</button>
			</Link>
		</div>
	);
}

export default CalendarApp;
