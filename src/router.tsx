import React from 'react';
import { Router } from '@reach/router';
import { RegistrationForm } from './pages/Registration';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import TravelInfoPage from './pages/Registration/TravelInfoPage';
import AddressPage from './pages/Registration/AddressPage';
import Summary from './pages/Registration/Summary';
import Companion from './pages/Registration/Companion';
import SuccessPage from './pages/Registration/SuccessPage';
import { RegistrationProvider } from './providers/RegistrationProvider';

const AppRouter = (): JSX.Element => {
  return (
    <>
      <Router>
        <Home path={'/'} />
      </Router>
      <RegistrationProvider>
        <Router>
          <RegistrationForm path={'registration'}>
            <Registration path={'personalInfo'} />
            <TravelInfoPage path={'travelInfo'} />
            <AddressPage path={'address'} />
            <Summary path={'summary'} />
            <Companion path={'companion'} />
            <SuccessPage path={'sucess'} />
          </RegistrationForm>
        </Router>
      </RegistrationProvider>
    </>
  );
};
export default AppRouter;
