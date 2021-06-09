import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import TravelInfoPage from './pages/Registration/TravelInfoPage';
import AddressPage from './pages/Registration/AddressPage';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact={true} path={'/'} component={Home} />
      <Route exact={true} path={'/registration'} component={Registration} />
      <Route exact={true} path={'/travelInfo'} component={TravelInfoPage} />
      <Route exact={true} path={'/address'} component={AddressPage} />
    </Switch>
  );
};

export default Routes;
