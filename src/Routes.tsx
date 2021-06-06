import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={'/'} component={Home} />
      <Route exact={true} path={'/registration'} component={Registration} />
    </Switch>
  );
};

export default Routes;
