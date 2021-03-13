import React from 'react';
import { CountryList } from '../components/CountryList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import Parallax from '../components/Parallax';

const title = {
    en: 'Home Page',
    ru: 'Главная Страница',
    ua: 'Головна Сторінка',
};

export const HomePage = () => {
    return (
        <>
            <Header />
            <Parallax />
            <div className='home-wrapper wrapper'>
                <PageTitle title={title} />
                <CountryList />
            </div>
            <Footer />
        </>
    );
};
