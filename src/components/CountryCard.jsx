import React from 'react';
import * as images from './countryImаges';

export const CountryCard = (props) => {
    const name = props.text;
    return (
        <div className='card-wrapper card' style={{ backgroundImage: `url(${images[name]})` }}>
            <div className='card-description'>{name}</div>
        </div>
    );
};
