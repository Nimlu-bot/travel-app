import React from 'react';
import { useSearch } from '../context/SearchContext';

export default function SearchField() {
    const search = useSearch();
    const changeHandler = (event) => {
        search.setSearch(event.target.value);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Нажал Enter а получил ничего))');
            search.setSearch(e.target.value);
        }
    };

    return (
        <div className='search-wrapper'>
            <div className='search-button'></div>
            <input
                autoFocus
                className='search'
                autoComplete='off'
                placeholder='search'
                type='text'
                name='search'
                value={search.search}
                onChange={changeHandler}
                onKeyPress={handleKeyPress}
            />
            <div className='clear-button' onClick={() => search.clearSearch()}></div>
        </div>
    );
}
