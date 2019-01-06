import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Routes from './routes';
import "./index.css";
import * as serviceWorker from './serviceWorker';
import { getToken } from './utils';

const client = new ApolloClient({
  uri: "/graphql",
  request: async operation => {
    const token = getToken();
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
