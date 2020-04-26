import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Sidebar from '../menu/Menu'
import './Header.css';
import Logo from '../../assets/logo-color.png'
import {AppContext} from "../../App";

function Header() {
    const appProps = useContext(AppContext);
    const userName = appProps.loggedIn.user.name;
    return (
        <nav>
            <Sidebar userName={userName}/>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div id={'serv-logo-container'}>
                    <img id={'serv-logo'} src={Logo} alt={'logo'}/>
                </div>
            </Link>
        </nav>
    );
}

export default Header;
