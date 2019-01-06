import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <React.Fragment>
    <li className="nav-item">
      <NavLink to="/sessions/login" className="nav-link">登陆</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/sessions/signup" className="nav-link">注册</NavLink>
    </li>
  </React.Fragment>
)