import React from 'react';
import { useSearch } from '../context/SearchContext';

export default function SearchField() {
    //const [form, setForm] = useState('');
    const search = useSearch();

    const changeHandler = (event) => {
        search.setSearch(event.target.value);
        // setForm(event.target.value);
        // console.log(event.target.value);
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
            />
            <div className='clear-button' onClick={() => search.clearSearch()}></div>
        </div>
    );
}
