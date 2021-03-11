import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Language() {
    //const [lang, setLang] = useState('by');
    const lang = useLanguage();
    //lang.language;

    const changeHandler = (e) => {
        lang.setLanguage(e.target.value.toLowerCase());
        //setLang(e.target.value.toLowerCase());
    };
    return (
        <div className='language-wrapper'>
            <form>
                <select size='1' value={lang.language} onChange={changeHandler}>
                    {/* // required name='language[]' */}
                    <option value='en'>EN</option>
                    <option value='ru'>RU</option>
                    <option value='by'>BY</option>
                </select>
            </form>
        </div>
    );
}
