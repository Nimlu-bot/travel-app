import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useLocalStorage } from '../hooks/localStorage';

const SearchContext = React.createContext();

const useSearch = () => {
    return useContext(SearchContext);
};

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useLocalStorage('search', '');

    const clearSearch = () => {
        setSearch('');
    };

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch,
                clearSearch,
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
