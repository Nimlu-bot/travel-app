import React from 'react';
import { CountryList } from '../components/CountryList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import Parallax from '../components/Parallax';
import Quote from '../components/Quote';
import { useLanguage } from './../context/LanguageContext';

const title = {
    en: 'Home Page',
    ru: 'Главная Страница',
    ua: 'Головна Сторінка',
};
//const lang = useLanguage().language;
export const HomePage = () => {
    const { language } = useLanguage();
    return (
        <>
            <Header />

            <div className='home-wrapper wrapper'>
                <PageTitle title={title} />
                <CountryList />
            </div>
            <Parallax />
            <Quote language={language} />
            <Footer />
        </>
    );
};
