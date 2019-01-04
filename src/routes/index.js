import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginLayout from '../layouts/LoginLayout'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const routes = () => (
  <Switch>
    <AppRoute exact path="/" layout={MainLayout} component={Home} />
    <AppRoute exact path="/login" layout={LoginLayout} component={Login} />
    <AppRoute exact path="/signup" layout={LoginLayout} component={SignUp} />
  </Switch>
)

export default routes;
