import React, { useState } from 'react';

import './new-project.scss';
import NewProjectImageUpload from './NewProjectImageUpload';

const NewProjectForm = ({ saveProject }) => {
    const [name, setName] = useState();
    const [recipient, setRecipient] = useState();
    const [imageData, setImageData] = useState();

    const handleNameChange = event => {
        const name = event.target.value;
        setName(name);
    }

    const handleRecipientChange = event => {
        const recipient = event.target.value;
        setRecipient(recipient);
    }

    const onFileUpload = fileData => {
        setImageData(fileData)

        // we need to send this to server
    }

    return (
        <form 
            className="box"
            onSubmit={(event) => {
                event.preventDefault();
                saveProject({ variables: { name, recipient }});
            }}>
            <h1 className="title">Add a new project</h1>
            <div className="new-project_form">
                <NewProjectImageUpload onFileUpload={onFileUpload} />
                <section className="new-project_form-fields">
                    <div className="field">
                        <div className="control">
                            <input 
                                className="input"
                                onChange={handleNameChange}
                                type="text"
                                placeholder="Name of your project" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control has-icons-left">
                            <input 
                                className="input"
                                onChange={handleRecipientChange}
                                type="text"
                                placeholder="Who's it for?" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                        </div>
                    </div>
            <button 
                className="button is-primary is-fullwidth"
                type="submit"
            >
                Add
            </button> 
                </section>
            </div>

        </form>
    );
}

export default NewProjectForm;