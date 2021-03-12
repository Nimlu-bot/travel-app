import React from 'react';
//import { useCountry } from '../context/codeContext';
import * as images from './countryImаges';
//import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function CountryAbout(props) {
    const lang = props.lang;
    return (
        <div className='country-about-wrapper'>
            <div
                className='country-photo-wrapper'
                style={{ backgroundImage: `url(${images[props.country.iso]})` }}
            ></div>
            <div className='country-about'>
                <p className='country-name'>{props.country.name[lang]}</p>
                <p className='country-capital-name'>{props.country.capital.name[lang]}</p>
                <p className='country-about-text'>{props.country.summary[lang]}</p>
            </div>
        </div>
    );
}

CountryAbout.propTypes = {
    country: PropTypes.object,
    lang: PropTypes.string,
};

export default CountryAbout;
