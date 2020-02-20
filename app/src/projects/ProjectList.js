import React from 'react';

import './projects.scss';
 import placeholder from './images/empty-placeholder.jpg';
//import pie from './images/pie.jpg';

const ProjectList = ({ projects, removeProject }) => {
    return (
        <div className="columns is-multiline">
                {projects && projects.map( project => {
                    console.log(project);
                    return (
                    <div 
                        className="column"
                        key={project.id}  
                    >
                        <div className="card project-list-item">
                            <div className="card-image project-list-item-image"> 
                                <img 
                                    alt="your work in progress"
                                    className={project.image ? "image" : "image placeholder" }
                                    src={project.image ? project.image : placeholder} />
                            </div>
                            <button
                                    aria-label="remove project"
                                    className="delete is-large project-list-item__close"
                                    onClick={() => { removeProject(project.id) }} />
                            <div className="card-content">
                                <h1 className="title is-5 has-text-centered">{project.name}</h1>
                                <div className="content project-list-item-recipient">
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    <p>{project.recipient}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
                )}
        </div>
    )
}
export default ProjectList;