import React from 'react';
import client from './apollo-client';
import { ApolloProvider } from 'react-apollo';
import ProjectList from './projects/ProjectList';

import './App.scss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ProjectList />
    </ApolloProvider>
  );
};

export default App;
