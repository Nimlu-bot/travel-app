import PropTypes from 'prop-types';
import React from 'react';

export const CountryCard = ({ name, capital, imageUrl, handleClick }) => {
    return (
        <div className='card-wrapper card' style={{ backgroundImage: `url(${imageUrl})` }} onClick={handleClick}>
            <div className='card-description'>{name}</div>
            <div className='card-description'>{capital}</div>
        </div>
    );
};

CountryCard.propTypes = {
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};
