import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import SiderNav from '../components/SiderNav';
import Header from '../components/Header';
import Home from '../components/Home';
import AutoReply from '../components/AutoReply';

export default () => (
  <React.Fragment>
    <Header />
    <div className="container-fluid" style={{marginTop: '15px'}}>
      <div className="row">
        <div className="col-6 col-md-2">
          <SiderNav />
        </div>
        <div className="col-12 col-md-10">
          <React.Suspense fallback={<div>loading ..... </div>}>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/autoreply" render={() => <AutoReply />} />
              <Route component={NoMatch} />
            </Switch>
          </React.Suspense>
        </div>

      </div>
    </div>
  </React.Fragment>
)