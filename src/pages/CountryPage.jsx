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

export const CountryPage = () => {
    return (
        <>
            <Header />
            <div className='country-wrapper wrapper'>
                <div className='country-title title'> Country Page</div>
                <CountryAbout />
                <div className='country-widjets-wrapper'>
                    <Wether />
                    <Currency />
                    <DateTime />
                </div>
                <div className='country-media-wrapper'>
                    <div className='country-photo-wrapper'>
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
