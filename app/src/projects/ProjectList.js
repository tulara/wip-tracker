import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './projects.scss';

const GET_PROJECTS = gql`
    query getAllProjects {
        projects {
            name
            recipient
        }
    }
`;

const ProjectList = () => {
    const { data } = useQuery(GET_PROJECTS)

    return (
        <ul className="project-list">
            {data && data.projects && data.projects.map( project => (
                <li>
                    <h3>{project.name}</h3>
                    <p>{project.recipient}</p>
                </li>
            ))}

        </ul>
    )
}
export default ProjectList;