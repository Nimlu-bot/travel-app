import React from 'react';
import Language from './Language';
import SearchField from './SearchField';

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header-logo'>React Game</div>
            <SearchField />
            <Language />
            <div className='header-user'>User</div>
        </div>
    );
}
