import React from 'react';
import * as images from './countryImаges';
import { useCountry } from '../context/CountryContext';
import { useHistory } from 'react-router-dom';

export const CountryCard = (props) => {
    const countryParams = useCountry();
    const history = useHistory();
    const name = props.text;
    const action = () => {
        history.push(`/country/${name}`);
        countryParams.setCountry(name);
    };
    return (
        <div className='card-wrapper card' style={{ backgroundImage: `url(${images[name]})` }} onClick={() => action()}>
            <div className='card-description'>{name}</div>
        </div>
    );
};
