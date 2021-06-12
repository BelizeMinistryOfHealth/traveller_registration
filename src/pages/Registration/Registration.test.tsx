import { render } from '@testing-library/react';
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

  describe('fields are present', () => {
    test('first name input', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);
      const fnameInput = screen.getByLabelText('First Name');
      expect(fnameInput).toBeInTheDocument();
    });

    test('last name input', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);

      const lnameInput = screen.getByLabelText('Last Name');
      expect(lnameInput).toBeInTheDocument();
    });

    test('middle name input', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);

      const middleInput = screen.getByLabelText('Middle Name');
      expect(middleInput).toBeInTheDocument();
    });

    test('nationality', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);

      const nationality = screen.getByRole('button', {
        name: /select a country/i,
      });
      expect(nationality).toBeInTheDocument();
    });

    test('dob', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);

      const dob = screen.getByLabelText('Date of Birth');
      expect(dob).toBeInTheDocument();
    });

    test('gender', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);

      const male = screen.getByLabelText('Male');
      expect(male).toBeInTheDocument();

      const female = screen.getByLabelText('Female');
      expect(female).toBeInTheDocument();
    });

    test('passportNumber', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);

      const passportNumber = screen.getByLabelText('Passport Number');
      expect(passportNumber).toBeInTheDocument();
    });

    test('occupation', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);

      const occupation = screen.getByLabelText('Occupation');
      expect(occupation).toBeInTheDocument();
    });

    test('phone numbers', () => {
      const screen = setup();
      const registerButton = screen.getByRole('button');
      userEvent.click(registerButton);

      const phoneNumbers = screen.getByLabelText('Phone Numbers');
      expect(phoneNumbers).toBeInTheDocument();
    });
  });
});
