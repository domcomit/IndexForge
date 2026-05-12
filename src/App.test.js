// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders IndexForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/IndexForge/i);
    expect(titleElement).toBeInTheDocument();
});
