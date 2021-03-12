import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import countries from '../components/countries';

const CountryContext = React.createContext();

const useCountry = () => {
    return useContext(CountryContext);
};

const CountryProvider = ({ children }) => {
    const [country, setCountry] = useState(JSON.parse(localStorage.getItem('country')) || {});

    const chooseCountry = (code) => {
        const number = countries.filter((el) => el.iso === code);
        setCountry(number[0] || {});
    };
    useEffect(() => {
        localStorage.setItem('country', JSON.stringify(country));
    }, [country]);

    return (
        <CountryContext.Provider
            value={{
                country,
                setCountry: chooseCountry,
            }}
        >
            {children}
        </CountryContext.Provider>
    );
};

CountryProvider.propTypes = {
    children: PropTypes.node,
};

export { useCountry, CountryProvider };
