import React from 'react';
import logo from '../assets/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { initProfil } from '../utils/slices/userIdSlice'
import { userInfosSelector } from '../utils/selectors'



const Header = () => {
    const connected = useSelector(state => state.user.status === 'connected');
    const userinfos = useSelector(state => userInfosSelector(state));
    // const {firstname, lastname, email, password} = userinfos

    return (
        <header className="main-nav">
            <Link to="/" className='main-nav-logo'>
                <img className="main-nav-logo-image" src={logo} alt="logo" />
            </Link>
            {connected ? (
                <Link to='/' className='main-nav-item' onClick="initProfil">
                    <span  className="user">
                        <i class="fa-solid fa-circle-user">
                            {null}
                        </i>
                    </span>
                    <span  className="user">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            Sign Out
                    </span>
                </Link>
            ):(
                <Link to="/login" className='main-nav-item'>
                    <span  className="user">
                        <i class="fa-solid fa-circle-user">
                            Sign
                        </i>
                    </span>
                </Link>
            )}
        </header>
    );
};

export default Header;