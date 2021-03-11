import React, { useContext, useState, useEffect } from 'react';

const LanguageContext = React.createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');

    const chooseLanguage = (lang) => {
        setLanguage((prev) => (prev = lang));
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
