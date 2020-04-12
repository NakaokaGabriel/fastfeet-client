import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import LogIn from '~/pages/LogIn';

import Order from '~/pages/Order';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LogIn} />

      <Route path="/orders" component={Order} isPrivate />
    </Switch>
  );
}
