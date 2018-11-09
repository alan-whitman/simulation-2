import React from 'react';
import './Header.css'
import logo from '../images/houser.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <div>
                <Link to="/"><img src={logo} alt="Houser" /></Link>
                <h1>Houser</h1>
            </div>
        </header>
    )
}

export default Header;