import React from 'react';

export default function SearchField() {
    return (
        <div className='search-wrapper'>
            <input autoFocus className='search' autoComplete='off' placeholder='search' type='text' name='search' />
            <div className='search-button'></div>
        </div>
    );
}
