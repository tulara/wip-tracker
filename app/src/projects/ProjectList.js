import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './projects.scss';
import placeholder from './images/empty-placeholder.jpg';

const GET_PROJECTS = gql`
    query getAllProjects {
        projects {
            id
            name
            recipient
        }
    }
`;

const ProjectList = () => {
    const { data } = useQuery(GET_PROJECTS)

    return (
        <div className="columns is-multiline">
                {data && data.projects && data.projects.map( project => (
                    <div 
                        className="column"
                        key={project.id}  
                    >
                        <div className="card project-list-item">
                            <div className="card-image"> 
                                <img 
                                    alt="your work in progress"
                                    className="image project-list-item-image"
                                    src={placeholder} />
                            </div>
                            <div className="card-content">
                                <h1 className="title is-5 has-text-centered">{project.name}</h1>
                                <div className="content">
                                    <p><b>For: </b>{project.recipient}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default ProjectList;