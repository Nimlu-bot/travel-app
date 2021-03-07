import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CountryCard } from './../components/CountryCard';

import { useHttp } from './../hooks/httpHook'; //потом удалить

export const HomePage = () => {
    const [cards, setCards] = useState(['GB', 'FR', 'IT', 'UA', 'DE', 'CZ', 'AT', 'ES']);
    const { loading, request, error, clearError } = useHttp(); // потом удалить

    const regHandler = async () => {
        try {
            const data = await request('http://localhost:4000/api/country/generate', 'POST', { ...cards });
            console.log(data);
            // auth.login(data.name, data.token, data.userId);
        } catch (e) {}
    };
    return (
        <>
            <Header />
            <div className='home-wrapper wrapper'>
                <div className='home-title title'> Home Page</div>
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
