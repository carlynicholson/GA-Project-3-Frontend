import React from 'react';
// import {AppContext} from '../App.js';
import "./Confirmation.css";

function Confirmation() {
    return(
        <div className="page">
            <div className="box">
                <h1>Request Sent!</h1>
                <p>Average wait time for confirmation is:</p>
                <h2>20 min.</h2>
                <p>We will text you when we confirm your provider.</p>
                <img className="divider" />
                <div className="info">
                    <img />
                    <p className="requested-service">Requested date and time for a walk</p>
                    <p className="date-time">April 30th at 10:30 AM</p>
                </div>
                <h3>Back to Home Page</h3>
            </div>
        </div>
    )
}

export default Confirmation;