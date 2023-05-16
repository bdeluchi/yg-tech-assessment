import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders repo list', () => {
  render(<App />);
  const heading = screen.getByText(/Repo list/i);
  expect(heading).toBeInTheDocument();
});
