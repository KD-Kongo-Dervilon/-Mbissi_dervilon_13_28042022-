import React from 'react';
import logo from '../assets/argentBankLogo.png';
import user from '../assets/person-circle.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-nav">
            <Link to="/" className='main-nav-logo'>
                <img className="main-nav-logo-image" src={logo} alt="logo" />
            </Link>
            <Link  to="/login" className="main-nav-item">
                <img className="lf" src={user}  alt="image" />
                    Sign In
            </Link>
        </header>
    );
};

export default Header;