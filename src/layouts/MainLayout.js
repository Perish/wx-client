import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import SiderNav from '../components/SiderNav';
import Header from '../components/Header';
import Home from '../components/Home';
import AutoReply from '../components/AutoReply';
import Messages from '../components/Messages';
import WeixinUsers from '../components/WeixinUsers';
import AppMsgs from '../components/AppMsgs';
import Settings from '../components/Settings';

export default () => (
  <React.Fragment>
    <Header />
    <div className="container-fluid" style={{marginTop: '15px'}}>
      <div className="row">
        <div className="col-6 col-md-2">
          <SiderNav />
        </div>
        <div className="col-12 col-md-10">
          <div className="paper">
          <React.Suspense fallback={<div>loading ..... </div>}>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/autoreply" render={() => <AutoReply />} />
              <Route exact path="/messages" render={() => <Messages />} />
              <Route exact path="/weixin_users" render={() => <WeixinUsers />} />
              <Route exact path="/appmsgs" render={() => <AppMsgs />} />
              <Route exact path="/settings" render={() => <Settings />} />
              <Route component={NoMatch} />
            </Switch>
          </React.Suspense>
          </div>
        </div>

      </div>
    </div>
  </React.Fragment>
)