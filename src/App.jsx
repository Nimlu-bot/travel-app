import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouts } from './pages/routs';
import { useAuth } from './hooks/authHook';
import { AuthContext } from './context/AuthContext';

function App() {
    const { token, login, logout, name, userId } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRouts(isAuthenticated);
    return (
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
            <Router>
                <div className='App'>{routes}</div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
