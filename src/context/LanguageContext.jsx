import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = React.createContext();

const useLanguage = () => {
    return useContext(LanguageContext);
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');

    const chooseLanguage = (lang) => {
        setLanguage(lang);
    };
    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language]);
    return (
        <LanguageContext.Provider
            value={{
                language: language,
                setLanguage: chooseLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.object,
};

export { useLanguage, LanguageProvider };
