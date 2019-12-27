import React from 'react';
import client from './apollo-client';
import { ApolloProvider } from 'react-apollo';
import ProjectList from './projects/ProjectList';
import NewProjectButton from './projects/NewProjectButton';

import './App.scss';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <section className="section has-text-centered">
        <h1 className="title has-text-centered">Work In Progress</h1>
        <NewProjectButton />
      </section>
      <section className="section">
        <ProjectList />
      </section>
    </ApolloProvider>
  );
};

export default App;
