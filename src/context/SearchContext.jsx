import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchContext = React.createContext();

const useSearch = () => {
    return useContext(SearchContext);
};

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState(''); // localStorage.getItem('search') || '');

    const chooseSearch = (string) => {
        setSearch(string);
    };

    useEffect(() => {
        localStorage.setItem('search', search);
    }, []);

    return (
        <SearchContext.Provider
            value={{
                search: search,
                setSearch: chooseSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

SearchProvider.propTypes = {
    children: PropTypes.object,
};

export { useSearch, SearchProvider };
