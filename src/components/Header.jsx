import React, { useContext } from 'react';
import Language from './Language';
import SearchField from './SearchField';
import { AuthContext } from './../context/AuthContext';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useLanguage } from './../context/LanguageContext';

export default function Header() {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const logoutHandler = (e) => {
        e.preventDefault();
        auth.logout();
        history.push('/');
    };
    const lang = useLanguage().language;

    return (
        <div className='header-wrapper'>
            <div className='header-logo'>
                <NavLink to='/'>Travel app {lang}</NavLink>
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
