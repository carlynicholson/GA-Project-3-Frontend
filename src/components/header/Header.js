import React from 'react'
import {Link} from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <nav>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div><span id={'logo'}>Fetch</span></div>
            </Link>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div>Home</div>
            </Link>
            <Link to={'/our-team'} style={{textDecoration: 'none'}}>
                <div>Our Team</div>
            </Link>
        </nav>
    );
}

export default Header;
