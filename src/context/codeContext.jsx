import React, { useContext, useState } from 'react';
import { countryesSet } from '../components/about';

const CountryContext = React.createContext();

export const useCountry = () => {
    return useContext(CountryContext);
};

export const CountryProvider = ({ children }) => {
    const [country, setCountry] = useState({});

    const chooseCountry = (code) => {
        const number = countryesSet.filter((el) => el.countryShort === code);
        setCountry((prev) => (prev = number[0]));
    };

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
