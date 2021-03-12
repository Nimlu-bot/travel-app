import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

const SearchContext = React.createContext();

const useSearch = () => {
    return useContext(SearchContext);
};

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState(localStorage.getItem('search') || '');

    const chooseSearch = (string) => {
        setSearch(string);
    };
    const clearSearch = () => {
        setSearch('');
    };

    useEffect(() => {
        localStorage.setItem('search', search);
    }, []);

    return (
        <SearchContext.Provider
            value={{
                search: search,
                setSearch: chooseSearch,
                clearSearch: clearSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

SearchProvider.propTypes = {
    children: PropTypes.node,
};

export { useSearch, SearchProvider };
