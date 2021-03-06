import React from 'react';

export const CountryCard = (props) => {
    return (
        <div className='card-wrapper card'>
            <div className='card-description'>{props.text}</div>
        </div>
    );
};
