import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginLayout from '../layouts/LoginLayout';
import { isAuth } from '../utils';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/sessions' render={() => isAuth() ? <Redirect to='/' /> : LoginLayout} />
      <Route path="/" render={() => isAuth() ? <MainLayout /> : <Redirect to='/sessions/login' />} />
    </Switch>
  </BrowserRouter>
)