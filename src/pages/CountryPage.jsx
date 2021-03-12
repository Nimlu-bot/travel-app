import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import CountryAbout from './../components/CountryAbout';
import Wether from '../components/Weather';
import Currency from '../components/Currency';
import DateTime from '../components/DateTime';
import PhotoGallery from '../components/PhotoGalery';
import Reaction from '../components/Reaction';
import Video from '../components/Video';
import Map from '../components/Map';
import { useCountry } from './../context/CountryContext';
import { useLanguage } from './../context/LanguageContext';

export const CountryPage = () => {
    const countryParams = useCountry();
    const lang = useLanguage().language;
    // console.log(countryParams.country);
    return (
        <>
            <Header />
            <div className='country-wrapper wrapper'>
                <div className='country-title title'> Country Page</div>
                <CountryAbout country={countryParams.country} lang={lang} />
                <div className='country-widjets-wrapper'>
                    <Wether country={countryParams.country} lang={lang} />
                    <Currency currency={countryParams.country.currency.iso} />
                    <DateTime timeZone={countryParams.country.capital.timezone.standard} lang={lang} />
                </div>
                <div className='country-media-wrapper'>
                    <div className='country-gallery-wrapper'>
                        <PhotoGallery countryShort={countryParams.country.iso} lang={lang} />
                        <Reaction />
                    </div>
                    <Video video={countryParams.country.video.url} />
                </div>
                <Map />
            </div>

            <Footer />
        </>
    );
};
