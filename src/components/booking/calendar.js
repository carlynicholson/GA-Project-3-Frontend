import React, {useState} from "react";
import Calendar from 'react-calendar';

export default function CalendarApp() {
	const [date, setDate] = useState(new Date());

	const onChange = date => this.setState({ date })

	return (
		<div>
			<Calendar
				onChange={onChange}
				value={date}
			/>
		</div>
	);
};
