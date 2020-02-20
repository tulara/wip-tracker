import React from 'react'

import ProjectList from './ProjectList';
import NewProjectButton from './NewProjectButton';

import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_PROJECTS = gql`
    query getAllProjects {
        projects {
            id
            name
            recipient
        }
    }
`;

const REMOVE_PROJECT = gql`
    mutation removeProject($id: String!) {
        removeProject(id: $id)
    }
`;

const WIPProjects = () => {
    const [removeProject] = useMutation(REMOVE_PROJECT)
    const { data } = useQuery(GET_PROJECTS)

    const removeProjectById = (id) => {
        console.log(`removing item with id ${id}`);
        // stupid apollo structure
        removeProject({ variables: {id}});
    }

    return (
    <>
        <section className="section has-text-centered">
            <h1 className="title has-text-centered">Projects In Progress</h1>
            <NewProjectButton />
        </section>
        <section className="section">
            {data && data.projects &&
                <ProjectList 
                    projects={data.projects}
                    removeProject={removeProjectById} />
            }
        </section>
    </>
    )
}

export default WIPProjects;