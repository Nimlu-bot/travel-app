import React, { useContext, useState, useEffect } from 'react';
import { countryesSet } from '../components/about';

const CountryContext = React.createContext();

export const useCountry = () => {
    return useContext(CountryContext);
};

export const CountryProvider = ({ children }) => {
    const [country, setCountry] = useState(JSON.parse(localStorage.getItem('country')) || {});

    const chooseCountry = (code) => {
        const number = countryesSet.filter((el) => el.countryShort === code);
        setCountry((prev) => (prev = number[0]));
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
