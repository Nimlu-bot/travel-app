import PropTypes from 'prop-types';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { countryPropTypes } from './countries';

export const CountryCard = ({ country, handleClick }) => {
    const { language } = useLanguage();

    const name = country.name[language];
    const capital = country.capital.name[language];
    const imageUrl = country.thumbnail.url;

    return (
        <div className='card-wrapper card' style={{ backgroundImage: `url(${imageUrl})` }} onClick={handleClick}>
            <div className='card-description'>{name}</div>
            <div className='card-description'>{capital}</div>
        </div>
    );
};

CountryCard.propTypes = {
    country: countryPropTypes,
    handleClick: PropTypes.func,
};
