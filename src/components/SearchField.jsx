import React from 'react';

export default function SearchField() {

    return (
        <div className='serch-box'>
            <div className="toggle-search-button"></div>
            <div  className='serch-wrapper'>
                <input className='serch' autoComplete='off' placeholder='search' type='text' name='search' />
                <div className='serch-button'></div>
            </div>
        </div>
    );
}
