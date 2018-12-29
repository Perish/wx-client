import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header = ({props}) => {
  return (    
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink to="/" className="navbar-brand">好记性不如烂笔头</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link">首页 <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">登陆</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">注册</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Header;
