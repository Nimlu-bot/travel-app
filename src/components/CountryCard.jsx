import React from 'react';
import * as images from './countryImаges';

import { useHistory } from 'react-router-dom';

export const CountryCard = (props) => {
    const history = useHistory();
    const name = props.text;
    return (
        <div
            className='card-wrapper card'
            style={{ backgroundImage: `url(${images[name]})` }}
            onClick={() => history.push(`/country/${name}`)}
        >
            <div className='card-description'>{name}</div>
        </div>
    );
};
