import React from 'react';
import client from './apollo-client';
import { ApolloProvider } from 'react-apollo';
import ProjectList from './projects/ProjectList';

import './App.scss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <section className="section">
        <h1 className="title has-text-centered">Work In Progress</h1>
        <ProjectList />
      </section>
    </ApolloProvider>
  );
};

export default App;
