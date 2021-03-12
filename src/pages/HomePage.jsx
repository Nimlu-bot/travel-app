import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CountryCard } from './../components/CountryCard';
import Parallax from '../components/Parallax';
import { useSearch } from '../context/SearchContext';
import { countryesSet } from '../components/about';

//import { useHttp } from './../hooks/httpHook'; //потом удалить
import { useLanguage } from '../context/LanguageContext';

export const HomePage = () => {
    const lang = useLanguage().language;
    const search = useSearch();
    //const { request } = useHttp(); // потом удалить

    //console.log(lang.language);
    // const regHandler = async () => {
    //     //потом удалить
    //     try {
    //         const data = await request('http://localhost:4000/api/country/generate', 'POST', { ...cards });
    //         console.log(data);
    //     } catch (e) {
    //         console.log('error');
    //     }
    // };

    return (
        <>
            <Header />
            <Parallax />

            <div className='home-wrapper wrapper'>
                <div className='home-title title'> Home Page {lang}</div>
                <div id='country' className='cards-wrapper'>
                    {countryesSet
                        .filter((data) => {
                            if (search.search == '') return data;
                            else if (
                                data.country.toLowerCase().includes(search.search.toLowerCase()) ||
                                data.capital.toLowerCase().includes(search.search.toLowerCase())
                            ) {
                                return data;
                            }
                        })
                        .map((el, i) => {
                            return <CountryCard key={i} text={el.country} id={el.countryShort} />;
                        })}
                </div>
            </div>
            {/* <button className='reg' onClick={regHandler}>
                reg
            </button> */}
            <Footer />
        </>
    );
};
