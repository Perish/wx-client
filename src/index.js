import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from "react-router-dom";
import routes from './routes';
import "./index.css";
import * as serviceWorker from './serviceWorker';

const token = localStorage.getItem('_ilike_cook');

const client = new ApolloClient({
  uri: "graphql",
  headers: {
    Authorization: token ? `Bearer ${token}` : ""
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      {routes()}
    </Router>
  </ApolloProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
