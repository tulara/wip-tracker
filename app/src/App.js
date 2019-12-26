import React from 'react';
import client from './apollo-client';
import { ApolloProvider } from 'react-apollo';
import ProjectList from './projects/ProjectList';

import './App.scss';

// const SAVE_NEW_PROJECT = gql`
//     mutation saveProject {

//     }
// `
const addNewProject = () => {
  alert("implement me!");
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <section className="section has-text-centered">
        <h1 className="title has-text-centered">Work In Progress</h1>
        <button 
            className="button is-primary"
            onClick={addNewProject}
            >
            Add new project
        </button>
      </section>
      <section className="section">
        <ProjectList />
      </section>
    </ApolloProvider>
  );
};

export default App;
