import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

const LanguageContext = React.createContext();

const useLanguage = () => {
    return useContext(LanguageContext);
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');

    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language]);

    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
    children: PropTypes.node,
};

export { useLanguage, LanguageProvider };
