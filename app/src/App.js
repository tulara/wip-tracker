import React from 'react';
import client from './apollo-client';
import { ApolloProvider } from 'react-apollo';
import WIPProjects from './projects/WIPProjects';

import './App.scss';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <WIPProjects />
    </ApolloProvider>
  );
};

export default App;
