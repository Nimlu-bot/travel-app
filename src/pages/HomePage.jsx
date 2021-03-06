import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CountryCard } from './../components/CountryCard';

export const HomePage = () => {
    const [cards, setCards] = useState([
        'England',
        'France',
        'Italy',
        'Belarus',
        'Germany',
        'Poland',
        'Austria',
        'Spain',
    ]);

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
            <Footer />
        </>
    );
};
