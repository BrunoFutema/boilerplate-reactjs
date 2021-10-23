import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Dashboard } from '@pages/Dashboard';
import { SignIn } from '@pages/SignIn';

import { Route } from './Route';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/" component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
