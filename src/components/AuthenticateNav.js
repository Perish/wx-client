import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {  NavLink, Redirect, withRouter } from 'react-router-dom';
import { removeToken } from '../utils';

const CURRENT_USER = gql`
  query CURRENT_USER {
    currentUser {
      username
      email
    }
  }
`;

export default withRouter(({history}) => (
  <Query query={CURRENT_USER} fetchPolicy="network-only">
    {
      ({loading, error, data}) => {
        if (error) return null;
        if (loading) return null;
        if(data && data.currentUser) {
          return (
          <React.Fragment>
            <li className="nav-item">
              <NavLink to="/sessions/login" className="nav-link">{data.currentUser.username}</NavLink>
            </li>
            <li className="nav-item">
              <span onClick={ async () => {
                await removeToken();
                history.push('/sessions/login');
              }} className="nav-link" style={{cursor: 'pointer'}}>退出</span>
            </li>
          </React.Fragment>)
        } else {
          removeToken()
          return <Redirect to="/sessions/login" />
        }
      }
    }
  </Query>
))