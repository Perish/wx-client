import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../components/Icon';

const Links = [
  {
    "name" : "首页",
    "icon" : "home",
    "path" : ""
  },
  {
    "name" : "功能",
    "icon" : "grip-horizontal",
    "routes" : [{ "name" : "自动回复", "path" : "/autoreply" }]
  },
  {
    "name" : "管理",
    "icon" : "scroll",
    "routes" : [
    { "name" : "消息管理", "path" : "/messages"},
    { "name" : "用户管理", "path" : "/weixin_users"},
    { "name" : "素材管理", "path" : "/appmsg"},]
  },
  {
    "name" : "设置",
    "icon" : "cog",
    "routes" : [{ "name" : "基本设置", "path" : "/settings" }]
  }
]

export default () => (
    <div className="paper">
    {
      Links.map( link => (
        <ul className="navbar-nav" key={link.name} style={{marginBottom: '10px'}}>
            {
              link.routes ? 
              <span><Icon name={link.icon} />&nbsp;&nbsp;{link.name}</span> : 
              <span>
                <NavLink to={`${link.path}`} style={{width: "100%"}}>
                  <Icon name={link.icon} />&nbsp;&nbsp;{link.name}
                </NavLink>
              </span>
        }
          {
            link.routes && link.routes.map( nextLink => (
              <li key={nextLink.name} className='nav-item' style={{marginTop: '10px', paddingLeft: '15px'}}>
                <NavLink to={`${nextLink.path}`}>{nextLink.name}</NavLink>
              </li>
            ))
          }
          <span style={{backgroundColor: "rgba(0,0,0,0.1)", width: "70%", height: "1px", marginTop: "10px", marginLeft: "15px"}}></span>
        </ul>
      ))
    }
    </div>
)