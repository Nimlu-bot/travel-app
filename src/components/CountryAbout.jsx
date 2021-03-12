import React from 'react';
//import { useCountry } from '../context/codeContext';
import * as images from './countryImаges';
//import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function CountryAbout(props) {
    return (
        <div className='country-about-wrapper'>
            <div
                className='country-photo-wrapper'
                style={{ backgroundImage: `url(${images[props.country.countryShort]})` }}
            ></div>
            <div className='country-about'>
                <h2 className='country-name'>{props.country.country}</h2>
                <h3 className='country-capital-name'>{props.country.capital}</h3>
                <p className='country-about-text'>{props.country.about}</p>
            </div>
        </div>
    );
}

CountryAbout.propTypes = {
    country: PropTypes.object,
};

export default CountryAbout;
