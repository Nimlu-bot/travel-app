import React from 'react';
import * as images from './countryImаges';
import { useCountry } from '../context/CountryContext';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
    const countryParams = useCountry();
    const history = useHistory();
    const id = props.id;
    const name = props.name;
    const capital = props.capital;
    const action = () => {
        history.push(`/country/${id}`);
        countryParams.setCountry(id);
    };
    return (
        <div className='card-wrapper card' style={{ backgroundImage: `url(${images[id]})` }} onClick={() => action()}>
            <div className='card-description'>{name}</div>
            <div className='card-description'>{capital}</div>
        </div>
    );
};

CountryCard.propTypes = {
    name: PropTypes.string,
    capital: PropTypes.string,
    id: PropTypes.string,
};

export { CountryCard };
