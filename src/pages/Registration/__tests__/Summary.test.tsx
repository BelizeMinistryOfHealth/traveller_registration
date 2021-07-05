import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Routes from '../../../Routes';

function setup() {
  const history = createMemoryHistory({
    initialEntries: ['/summary', '/companion'],
  });
  return render(
    <Router history={history}>
      <Routes />
    </Router>
  );
}

describe('Summary Tests', () => {
  it('redirects to companion page', () => {
    const { getByRole } = setup();

    const registerBtn = getByRole(/register/i);
    expect(registerBtn).toHaveTextContent(/register another visitor/i);
    userEvent.click(registerBtn);
    const heading = getByRole(/form-heading/i);
    expect(heading).toHaveTextContent(/personal information/i);
    getByRole(/firstName/i);
  });
});
