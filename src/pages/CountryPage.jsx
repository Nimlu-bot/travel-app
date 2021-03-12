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
// import { useParams } from 'react-router-dom';
import { useCountry } from './../context/CountryContext';
import { useLanguage } from './../context/LanguageContext';

export const CountryPage = () => {
    //const { id } = useParams();
    const countryParams = useCountry();
    const lang = useLanguage().language;
    //countryParams.setCountry(id);
    //const country = countryParams.country;
    // const [country, setCountry] = useState();
    // setCountry(countryParams.country);
    // console.log(countryParams.country.currency);
    return (
        <>
            <Header />
            <div className='country-wrapper wrapper'>
                <div className='country-title title'> Country Page {lang}</div>
                <CountryAbout country={countryParams.country} />
                <div className='country-widjets-wrapper'>
                    <Wether country={countryParams.country} lang={lang} />
                    <Currency currency={countryParams.country.currency} />
                    <DateTime timeZone={countryParams.country.timeZone} lang={lang} />
                </div>
                <div className='country-media-wrapper'>
                    <div className='country-gallery-wrapper'>
                        <PhotoGallery />
                        <Reaction />
                    </div>
                    <Video />
                </div>
                <Map country={countryParams.country} lang={lang} />
            </div>

            <Footer />
        </>
    );
};
