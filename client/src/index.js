import React from "react";
import ReactDOM from "react-dom";
import './stylesheets/app.scss';
import { Landing } from './components/Landing.js';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const Index = () => {
  return <div className='hello'><Landing/></div>;
};

ReactDOM.render(
  <ApolloProvider client={client}>
  <Index />
  </ApolloProvider>,
  document.getElementById("index")
);
