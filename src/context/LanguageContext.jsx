import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useLocalStorage } from '../hooks/localStorage';

const LanguageContext = React.createContext();

const useLanguage = () => {
    return useContext(LanguageContext);
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage('lang', 'en');
    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
    children: PropTypes.node,
};

export { useLanguage, LanguageProvider };
