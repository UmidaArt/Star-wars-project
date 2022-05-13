import React from 'react';
import logo from '../../assets/images/logo.png'
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Link to="/">
            <div className="header">
                <img src={logo} className="logo" alt="Star wars"/>
            </div>
        </Link>
    );
};

export default Header;