import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CountryCard } from './../components/CountryCard';
import Paralax from '../components/Paralax';

import { useHttp } from './../hooks/httpHook'; //потом удалить
import { useLanguage } from '../context/LanguageContext';

export const HomePage = () => {
    const [cards] = useState(['GB', 'FR', 'IT', 'UA', 'DE', 'CZ', 'AT', 'ES']);
    const { request } = useHttp(); // потом удалить
    const lang = useLanguage().language;
    //console.log(lang.language);
    const regHandler = async () => {
        //потом удалить
        try {
            const data = await request('http://localhost:4000/api/country/generate', 'POST', { ...cards });
            console.log(data);
        } catch (e) {}
    };
    return (
        <>
            <Header />
            <Paralax />

            <div className='home-wrapper wrapper'>
                <div className='home-title title'> Home Page {lang}</div>
                <div className='cards-wrapper'>
                    {cards.map((el, i) => {
                        return <CountryCard key={i} text={el} />;
                    })}
                </div>
            </div>
            <button className='reg' onClick={regHandler}>
                reg
            </button>
            <Footer />
        </>
    );
};
