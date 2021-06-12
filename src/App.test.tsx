import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  test('render register button', () => {
    const screen = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const registerButton = screen.getByRole('button');
    expect(registerButton).toBeInTheDocument();
  });

  test('should display personal information page when clicks register button', () => {
    const screen = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const registerButton = screen.getByRole('button');
    userEvent.click(registerButton);

    const heading = screen.getByRole('heading', {
      name: /personal information/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
