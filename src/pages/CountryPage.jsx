import React, { useState } from 'react';
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
import { useParams } from 'react-router-dom';
import { useCountry } from './../context/codeContext';

export const CountryPage = () => {
    const { id } = useParams();
    const countryParams = useCountry();
    countryParams.setCountry(id);
    //const country = countryParams.country;
    // const [country, setCountry] = useState();
    // setCountry(countryParams.country);
    console.log(countryParams.country);
    return (
        <>
            <Header />
            <div className='country-wrapper wrapper'>
                <div className='country-title title'> Country Page</div>
                <CountryAbout country={countryParams.country} />
                <div className='country-widjets-wrapper'>
                    <Wether country={countryParams.country} />
                    <Currency />
                    <DateTime />
                </div>
                <div className='country-media-wrapper'>
                    <div className='country-gallery-wrapper'>
                        <PhotoGallery />
                        <Reaction />
                    </div>
                    <Video />
                </div>
                <Map />
            </div>

            <Footer />
        </>
    );
};
