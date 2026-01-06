import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Genteelism & Normal Terms/i);
  expect(titleElement).toBeInTheDocument();
});
