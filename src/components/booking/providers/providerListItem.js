import React, {useContext} from "react";
import Book from '../../../assets/book.png'
import {AppContext} from "../../../App";
import {createAppointment} from "../../../services/api-helper";
import history from "../../../history";

function ProvidersListItem(props) {
	const appProps = useContext(AppContext);

	const handleBookClick = async(e) => {
		e.preventDefault();
		let book = props.element['_id'];
		appProps.setChosenProvider(book);
		const json = await createAppointment(appProps.appointmentInfo).then((response) => {
			console.log("APPOINTMENT INFO FROM PROVIDER ",appProps.appointmentInfo)
			console.log("POST RESPONSE: ", response);
			if (response.status === 200) {
				console.log(response.data);
				appProps.setNewAppointment([...appProps.newAppointment, appProps.appointmentInfo]);
				history.push("/confirmation");
			} else {
				return ('login error');
			}
		}).catch(error => {
			return ("registration error" + error);
		});
	};

	return (
		<div className={'provider-item'}>
			<div className={'provider-image'}><img
				src={props.element.img}
				alt={'provider'}/></div>
			<div className={'provider-name'}>{props.element.name}</div>
			<div className={'book-provider-icon'}>
				<img src={Book}
				     alt={'book me'}
				     onClick={handleBookClick}/>
			</div>
		</div>
	);
}

export default ProvidersListItem;
