import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouts } from './pages/routs';
import { useAuth } from './hooks/authHook';
import { AuthContext } from './context/AuthContext';
import { CountryProvider } from './context/CountryContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
    const { token, login, logout, name, userId } = useAuth();

    const isAuthenticated = !!token;
    const routes = useRouts(isAuthenticated);
    return (
        <LanguageProvider>
            <AuthContext.Provider
                value={{
                    token,
                    login,
                    logout,
                    name,
                    userId,
                    isAuthenticated,
                }}
            >
                <CountryProvider>
                    <Router>
                        <div className='App'>{routes}</div>
                    </Router>
                </CountryProvider>
            </AuthContext.Provider>
        </LanguageProvider>
    );
}

export default App;
