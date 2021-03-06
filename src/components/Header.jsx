import React from 'react';
import SearchField from './SearchField';

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header-logo'>React Game</div>
            <SearchField />
            <div className='header-user'>User</div>
        </div>
    );
}
