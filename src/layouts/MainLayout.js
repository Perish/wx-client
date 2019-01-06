import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import Header from '../components/Header';
import Home from '../components/Home';
import { isAuth } from '../utils';

export default ({children}) => (
  <React.Fragment>
    <Header isAuthenticated={isAuth()}/>
    {children}
    <React.Suspense fallback={<div>loading ..... </div>}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route component={NoMatch} />
      </Switch>
    </React.Suspense>
  </React.Fragment>
)