import React, {useEffect, useState} from 'react';
import {getAppointmentById} from "../../services/api-helper";
import Cancel from '../../assets/cancel.png';
import Edit from '../../assets/edit.png';

export default function DashboardListItem(props) {
	const [appointmentData, setAppointmentData] = useState([]);
	let theDate = this;
	let theTime = this;
	let theService = this;

	useEffect(() => {
		getAppointmentById(props.appointmentID).then(res => {
			setAppointmentData(res);
		});
	},[props.appointmentID]);

	if (appointmentData['data'] !== undefined) {
		theDate = appointmentData.data.date;
		theTime = appointmentData.data.time;
		theService = appointmentData.data.service;
	}

	return (
		<div className={'upcoming-appointment'}>
			<div className={'upcoming-appointment-type'}>{theService}</div>
			<div className={'upcoming-appointment-date'}>{theDate} @ </div>
			<div className={'upcoming-appoingment-time'}>{theTime}</div>
			<div className={'appointment-edit-icon'}>
				<img src={Edit} alt={'edit appointment'}/>
			</div>
			<div className={'appointment-cancel-icon'}>
				<img src={Cancel} alt={'cancel appointment'}/>
			</div>
		</div>
	);
};
