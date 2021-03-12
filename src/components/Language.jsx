import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Language() {
    const lang = useLanguage();

    const changeHandler = (e) => {
        lang.setLanguage(e.target.value.toLowerCase());
    };
    return (
        <div className='language-wrapper'>
            <select size='1' value={lang.language} onChange={changeHandler}>
                <option value='en'>EN</option>
                <option value='ru'>RU</option>
                <option value='ua'>UA</option>
            </select>
        </div>
    );
}
