import PropTypes from 'prop-types';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PageTitle = ({ title }) => {
    const { language } = useLanguage();

    return <div className='home-title title'>{title[language]}</div>;
};

PageTitle.propTypes = {
    title: PropTypes.shape({
        en: PropTypes.string,
        ua: PropTypes.string,
        ru: PropTypes.string,
    }),
};
