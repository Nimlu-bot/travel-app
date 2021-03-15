import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouts } from './pages/routs';
import { useAuth } from './hooks/authHook';
import { AuthContext } from './context/AuthContext';
import { CountryProvider } from './context/CountryContext';
import { LanguageProvider } from './context/LanguageContext';
import { SearchProvider } from './context/SearchContext';

function App() {
    const { token, login, logout, withoutLogin, name, userId, anonim, image } = useAuth();

    const isAuthenticated = !!token;

    const routes = useRouts(isAuthenticated || anonim);
    return (
        <LanguageProvider>
            <AuthContext.Provider
                value={{
                    token,
                    login,
                    logout,
                    withoutLogin,
                    name,
                    userId,
                    anonim,
                    image,
                    isAuthenticated,
                }}
            >
                <CountryProvider>
                    <SearchProvider>
                        <Router>
                            <div className='App'>{routes}</div>
                        </Router>
                    </SearchProvider>
                </CountryProvider>
            </AuthContext.Provider>
        </LanguageProvider>
    );
}

export default App;
