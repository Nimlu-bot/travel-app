import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without registration link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Продолжить без регистрации/i);
    expect(linkElement).toBeInTheDocument();
});
