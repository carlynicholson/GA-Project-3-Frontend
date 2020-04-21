import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return(
        <nav>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div><span id={'logo'}>Fetch</span></div>
            </Link>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div>Home</div>
            </Link>
            <Link to={'/about'} style={{textDecoration: 'none'}}>
                <div>About</div>
            </Link>
        </nav>
    )
}

export default Header
