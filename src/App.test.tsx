import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app component', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app-container');
  expect(appContainer).toBeInTheDocument();
});
