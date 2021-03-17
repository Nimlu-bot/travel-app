import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { countries } from '../components/countries';
import { useLocalStorage } from '../hooks/localStorage';

const CountryContext = React.createContext();

const useCountry = () => {
    return useContext(CountryContext);
};

const CountryProvider = ({ children }) => {
    const [country, setCountry] = useLocalStorage('country', {});

    const chooseCountry = (code) => {
        const number = countries.filter((el) => el.iso === code);
        setCountry(number[0] || {});
    };

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
