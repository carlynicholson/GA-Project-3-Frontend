import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Sidebar from '../menu/Menu'
import './Header.css';
import Logo from '../../assets/logo-color.png'
import {AppContext} from "../../App";

function Header() {
    const appProps = useContext(AppContext);
    const userName = appProps.loggedIn.name;
    return (
        <nav>
            <Sidebar userName={userName}/>
            <div id={'serv-logo-container'}>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <img id={'serv-logo'} src={Logo} alt={'logo'}/>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
