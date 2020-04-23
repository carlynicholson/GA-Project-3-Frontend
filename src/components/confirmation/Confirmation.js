import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from '../../App';
import './Confirmation.css';
import Calendar from '../../assets/conf-cal.png';


function Confirmation() {
    const appProp = useContext(AppContext)
    
    return(
        <div className="page">
            <div className="box">
                <div className="box-info">
                <h1>Request Sent!</h1>
                <p>Average wait time for confirmation is:</p>
                <h2>20 min.</h2>
                <p>We will text you when we confirm your provider.</p>
                <div className="info">
                    <img className="calendar" src={Calendar} alt='Request Details'/>
                    <p className="requested-service">Requested date and time for a {appProp.service}</p>
                    <p className="date-time" value={appProp.date}> at 10:30 AM</p>
                </div>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                <h3>Back to Home Page</h3>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;