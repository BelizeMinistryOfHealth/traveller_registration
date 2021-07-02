import '@testing-library/jest-dom/extend-expect';
import { render as tlRender } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from '../../../Routes';
import userEvent from '@testing-library/user-event';

function render() {
  const history = createMemoryHistory({
    initialEntries: ['/companion'],
  });
  return tlRender(
    <Router history={history}>
      <Routes />
    </Router>
  );
}

describe('Companion Tests', () => {
  it('saves companion data', () => {
    const { getByRole, getByText, getByLabelText } = render();
    const heading = getByRole(/form-heading/i);
    expect(heading).toHaveTextContent(/personal information/i);
    const fnameInput = getByRole('firstName');
    userEvent.type(fnameInput, 'Scooby');
    const lnameInput = getByRole('lastName');
    userEvent.type(lnameInput, 'Doo');
    const mnameInput = getByRole('middleName');
    userEvent.type(mnameInput, 'Furry');
    const countryInput = getByRole('button', { name: /select a country/i });
    userEvent.click(countryInput);
    userEvent.click(getByText('Jamaica'));
    const dobInput = getByRole('dob');
    userEvent.type(dobInput, '200-10-02');
    const genderInput = getByLabelText('Male');
    userEvent.click(genderInput);
    const passportInput = getByRole('passport');
    userEvent.type(passportInput, '221211');
    const phoneInput = getByRole('phone');
    userEvent.type(phoneInput, '222887711');
    const occupationInput = getByRole('occupation');
    userEvent.type(occupationInput, 'student');
    const emailInput = getByRole('email');
    userEvent.type(emailInput, 'scoopy@doo.com');
    const nextButton = getByRole('button', { name: /next/i });
  });
});
