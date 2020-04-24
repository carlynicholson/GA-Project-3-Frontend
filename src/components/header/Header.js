import React from 'react';
import {Link} from "react-router-dom";
import Sidebar from '../menu/Menu'
import './Header.css';

function Header() {
    return (
        <>
        <nav>
            <Sidebar />
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div><span id={'logo'}>Fetch</span></div>
            </Link>
        </nav>
        </>
    );
}

export default Header;
