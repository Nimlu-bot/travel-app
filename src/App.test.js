// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders without registration link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Продолжить без регистрации/);
//     expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
