import React from 'react';
import { useHistory } from 'react-router';
import { useCountry } from '../context/CountryContext';
import { useLanguage } from '../context/LanguageContext';
import { useSearch } from '../context/SearchContext';
import { countries } from './countries';
import { CountryCard } from './CountryCard';

export const CountryList = () => {
    const { language } = useLanguage();
    const { search } = useSearch();
    const countryParams = useCountry();
    const history = useHistory();

    const filter = new RegExp(search, 'gi');
    const filteredCountries = countries.filter(
        (country) => country.name[language].match(filter) || country.capital.name[language].match(filter),
    );

    const action = (id) => {
        history.push(`/country/${id}`);
        countryParams.setCountry(id);
    };

    return (
        <div id='country' className='cards-wrapper'>
            {filteredCountries.map((el) => (
                <CountryCard
                    key={el.iso}
                    name={el.name[language]}
                    capital={el.capital.name[language]}
                    imageUrl={el.thumbnail.url}
                    handleClick={() => action(el.iso)}
                />
            ))}
        </div>
    );
};
