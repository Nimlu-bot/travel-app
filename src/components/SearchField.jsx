import React, { useRef } from 'react';
import { useSearch } from '../context/SearchContext';
import { useLanguage } from './../context/LanguageContext';

export default function SearchField() {
    const fieldRef = useRef();
    const search = useSearch();
    const lang = useLanguage().language;
    const changeHandler = (event) => {
        search.setSearch(event.target.value);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Нажал Enter, а получил ничего))');
            search.setSearch(e.target.value);
        }
    };
    const searchButtonHandler = () => {
        console.log('Нажал кнопку поиска, а получил ничего))');
        fieldRef.current.focus();
        search.setSearch(fieldRef.current.value);
    };

    const placeholderName = {
        en: 'search',
        ru: 'поиск',
        ua: 'пошук',
    };
    return (
        <div className='search-wrapper'>
            <div className='search-button' onClick={() => searchButtonHandler()}></div>
            <input
                autoFocus
                className='search'
                autoComplete='off'
                placeholder={placeholderName[lang]}
                type='text'
                name='search'
                value={search.search}
                onChange={changeHandler}
                onKeyPress={handleKeyPress}
                ref={fieldRef}
            />
            <div className='clear-button' onClick={() => search.clearSearch()}></div>
        </div>
    );
}
