import React from 'react';
import Currency from '../components/Currency';
import DateTime from '../components/DateTime';
import Map from '../components/Map';
import { PageTitle } from '../components/PageTitle';
import PhotoGallery from '../components/PhotoGalery';
import Video from '../components/Video';
import Weather from '../components/Weather';
import CountryAbout from './../components/CountryAbout';
import Footer from './../components/Footer';
import Header from './../components/Header';
import { useCountry } from './../context/CountryContext';
import { useLanguage } from './../context/LanguageContext';

export const CountryPage = () => {
    const countryParams = useCountry();
    const lang = useLanguage().language;
    const title = {
        en: 'Country Page',
        ru: 'Страница страны',
        ua: 'Cторінка країни',
    };
    return (
        <>
            <Header />
            <div className='country-wrapper wrapper'>
                <PageTitle title={title} />
                <CountryAbout country={countryParams.country} lang={lang} />
                <div className='country-widjets-wrapper'>
                    <Weather country={countryParams.country} lang={lang} />
                    <Currency
                        iso={countryParams.country.currency.iso}
                        currency={countryParams.country.currency.name[lang]}
                        lang={lang}
                    />
                    <DateTime timeZone={countryParams.country.capital.timezone.standard} lang={lang} />
                </div>
                <div className='country-media-wrapper'>
                    <div className='country-gallery-wrapper'>
                        <PhotoGallery countryShort={countryParams.country.iso} lang={lang} />
                    </div>
                    <div className='video-map'>
                        <Video video={countryParams.country.video.url} />
                        <Map
                            countryShort={countryParams.country.iso}
                            capital={countryParams.country.capital.name[lang]}
                            lang={lang}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
