import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouts } from './pages/routs';

function App() {
    const routes = useRouts(true);
    return (
        <Router>
            <div className='App'>{routes}</div>
        </Router>
    );
}

export default App;
