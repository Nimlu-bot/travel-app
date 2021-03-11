import React, { useContext, useState, useEffect } from 'react';
import { countryesSet } from '../components/about';
import PropTypes from 'prop-types';

const CountryContext = React.createContext();

const useCountry = () => {
    return useContext(CountryContext);
};

const CountryProvider = ({ children }) => {
    const [country, setCountry] = useState(JSON.parse(localStorage.getItem('country')) || {});

    const chooseCountry = (code) => {
        const number = countryesSet.filter((el) => el.countryShort === code);
        setCountry(number[0]);
    };
    useEffect(() => {
        localStorage.setItem('country', JSON.stringify(country));
    }, [country]);

    return (
        <CountryContext.Provider
            value={{
                country: country,
                setCountry: chooseCountry,
            }}
        >
            {children}
        </CountryContext.Provider>
    );
};

CountryProvider.propTypes = {
    children: PropTypes.object,
};

export { useCountry, CountryProvider };
