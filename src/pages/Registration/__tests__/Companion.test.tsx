import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render as tlRender } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from '../../../Routes';
import userEvent from '@testing-library/user-event';
import {
  RegistrationProvider,
  useRegistration,
} from '../../../providers/RegistrationProvider';

function setup() {
  const result = { current: {} };
  const history = createMemoryHistory({
    initialEntries: ['/companion', '/summary'],
  });
  function CompanionComponent() {
    result.current = useRegistration();
    return (
      <Router history={history}>
        <RegistrationProvider>
          <Routes />
        </RegistrationProvider>
      </Router>
    );
  }
  const screen = tlRender(<CompanionComponent />);
  return { result, screen };
}

describe('Companion Tests', () => {
  it('saves companion data', () => {
    const { screen } = setup();
    const {
      getByRole,
      getByText,
      getByLabelText,
      queryByRole,
      queryByText,
      debug,
    } = screen;
    const heading = getByRole(/form-heading/i);
    expect(heading).toHaveTextContent(/personal information/i);
    const fnameInput = getByRole('firstName');
    userEvent.type(fnameInput, 'Scooby');
    const lnameInput = getByRole('lastName');
    userEvent.type(lnameInput, 'Doo');
    const mnameInput = getByRole('middleName');
    userEvent.type(mnameInput, 'Furry');

    const countryInput = getByRole('button', { name: /select a country/i });
    fireEvent.click(countryInput);
    expect(getByRole('listbox')).toBeInTheDocument();
    fireEvent.click(getByText('Jamaica'));
    expect(queryByRole('listbox')).not.toBeInTheDocument();
    // expect(getByText('Belize')).toBeInTheDocument();

    const dobInput = getByRole('dob');
    userEvent.type(dobInput, '2000-10-02');
    const genderInput = getByLabelText('Male');
    userEvent.click(genderInput);
    const passportInput = getByRole('passport');
    userEvent.type(passportInput, '221211');
    const phoneInput = getByRole('phone');
    userEvent.type(phoneInput, '222887711');
    const occupationInput = getByRole('occupation');
    userEvent.type(occupationInput, 'student');
    const emailInput = getByLabelText('Email');
    userEvent.type(emailInput, 'scoopy@doo.com');
    const nextButton = getByRole('button', { name: /next/i });
    userEvent.click(nextButton);
    const anError = queryByText(/required/i);
    expect(anError).not.toBeInTheDocument();

    debug();
    const companionsList = getByRole('companions');
    expect(companionsList).toBeInTheDocument();
  });
});
