import React from 'react';
import client from './apollo-client';
import { ApolloProvider } from 'react-apollo';

import './App.scss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="container">
          <button className="button is-danger is-outlined" onClick={() => (alert("Hello!"))}>
          Hello?
          </button>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
