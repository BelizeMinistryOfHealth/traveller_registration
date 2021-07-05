import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe('Personal Info Form', () => {
  test('should have a next button', () => {
    const screen = setup();
    const registerButton = screen.getByRole('button');
    userEvent.click(registerButton);
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();
  });

  describe('when form is submitted', () => {
    test('it should proceed to the travel info page', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);

      const fnameInput = screen.getByLabelText('First Name');
      userEvent.type(fnameInput, 'Joe');
      const lnameInput = screen.getByLabelText('Last Name');
      userEvent.type(lnameInput, 'Doe');
      const nationality = screen.getByRole('button', {
        name: /select a country/i,
      });
      // Select a country
      fireEvent.click(nationality);
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      userEvent.click(screen.getByText('Belize'));
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(screen.getByText('Belize')).toBeInTheDocument();

      const dob = screen.getByLabelText('Date of Birth');
      userEvent.type(dob, '1990-01-01');

      const male = screen.getByLabelText('Male');
      userEvent.click(male);

      const passportNumber = screen.getByLabelText('Passport Number');
      userEvent.type(passportNumber, '111111');

      const phoneNumbers = screen.getByLabelText('Phone Numbers');
      userEvent.type(phoneNumbers, '666666');

      const occupation = screen.getByLabelText('Occupation');
      userEvent.type(occupation, 'unemployed');

      const email = screen.getByLabelText('Email');
      userEvent.type(email, 'email@mail.com');
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      const heading = screen.getByRole('heading', {
        name: /travel information | Joe Does/i,
      });
      expect(heading).toBeInTheDocument();
      screen.debug();
    });
  });
});
