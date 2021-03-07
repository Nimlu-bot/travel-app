import React, { useContext } from 'react';
import Language from './Language';
import SearchField from './SearchField';
import { AuthContext } from './../context/AuthContext';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const logoutHandler = (e) => {
        e.preventDefault();
        auth.logout();
        history.push('/');
    };

    return (
        <div className='header-wrapper'>
            <div className='header-logo'>
                <NavLink to='/'>React Game</NavLink>
            </div>
            <SearchField />
            <Language />
            <div className='header-user'>User</div>
            <button className='header-logout' onClick={logoutHandler}>
                LogOut
            </button>
        </div>
    );
}
