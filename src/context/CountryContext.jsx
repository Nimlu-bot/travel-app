import { createContext } from 'react';
function noop() {}
export const CountryContext = createContext({
    country: '',
    counrtyRU: '',
    countryBY: '',
    countryShort: '',
    capital: '',
    capitalRU: '',
    capitalBY: '',
    about: '',
    aboutRU: '',
    aboutBY: '',
    videoLink: '',
    timeZone: 0,
    images: ['', '', '', '', '', ''],
    imagesDiscr: ['', '', '', '', '', ''],
    imagesDiscrRU: ['', '', '', '', '', ''],
    imagesDiscrBY: ['', '', '', '', '', ''],
    currency: '',
    setCountry: noop,
});
