import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";

describe('deviceready', () => {
  test('renders learn react link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getByText("URL du Brocker");
    expect(linkElement).toBeInTheDocument();
  });
});