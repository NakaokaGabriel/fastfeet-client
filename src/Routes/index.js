import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

// Default routes
import LogIn from '~/pages/LogIn';

// Private routes
import Order from '~/pages/Order';
import OrderRegister from '~/pages/Order/Register';
import OrderEdit from '~/pages/Order/Edit';

import Couriers from '~/pages/Couriers';
import CouriersRegister from '~/pages/Couriers/Register';
import CouriersEdit from '~/pages/Couriers/Edit';

import Recipient from '~/pages/Recipient';
import RecipientRegister from '~/pages/Recipient/Register';
import RecipientEdit from '~/pages/Recipient/Edit';

import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      {/* Default routes */}
      <Route exact path="/" component={LogIn} />

      {/* Private routes */}
      <Route path="/orders" component={Order} isPrivate />
      <Route path="/order/register" component={OrderRegister} isPrivate />
      <Route path="/order/edit/:id" component={OrderEdit} isPrivate />

      <Route path="/couriers" component={Couriers} isPrivate />
      <Route path="/courier/register" component={CouriersRegister} isPrivate />
      <Route path="/courier/edit/:id" component={CouriersEdit} isPrivate />

      <Route path="/recipients" component={Recipient} isPrivate />
      <Route
        path="/recipient/register"
        component={RecipientRegister}
        isPrivate
      />
      <Route path="/recipient/edit/:id" component={RecipientEdit} isPrivate />

      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
