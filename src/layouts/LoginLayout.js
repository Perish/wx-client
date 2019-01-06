import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import bg from '../assets/images/bg5.jpeg';

const LoginLayout = withRouter(({match}) => (
  <div style={{width: "100vw", height: "100vh"}}>
    <div style={{...styles.login}}>
      <div style={{flex: 1, position: "relative"}}>
        <img src={bg} alt="bag" style={{...styles.absolute}} />
        <div style={{...styles.absolute, backgroundColor: "#000", opacity: "0.5"}}></div>
        <div style={{...styles.absolute,...styles.intro}}>
          <h2 style={{...styles.space}}>美好的一天</h2>
          <p style={{...styles.space}}>简单、高效、可靠，让你的生活更
          有味道。开启你的探索之旅！</p>
          <p>两个黄鹂鸣翠绿，一行白鹭上青天</p>
        </div>
      </div>
      <Switch>
        <Route path={`${match.path}/login`} component={Login} />
        <Route path={`${match.path}/signup`} component={SignUp} />
        <Route render={() => <Redirect to={`${match.path}/login`} />} />
      </Switch>
    </div>
  </div>
));


const styles = {};

styles.login = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
}

styles.absolute = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}

styles.intro = {
  color: 'white',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "bold",
  
}

styles.space = {
  marginBottom: "3rem",
}


export default LoginLayout;