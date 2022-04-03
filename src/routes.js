import React, { useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import MenuBar from './muii';
function Routes() {
  return (
    <BrowserRouter>
      <div>
      <MenuBar  />
        <Switch>
          <Route exact path={'/'}>
            <Dashboard />
          </Route>

          <Route exact path={'/login'}>
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
