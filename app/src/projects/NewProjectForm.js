import React, { useState } from 'react';

const NewProjectForm = ({ saveProject }) => {
    const [name, setName] = useState();
    const [recipient, setRecipient] = useState();

    const handleNameChange = event => {
        const name = event.target.value;
        setName(name);
    }

    const handleRecipientChange = event => {
        const recipient = event.target.value;
        setRecipient(recipient);
    }

    return (
        <form 
            className="box"
            onSubmit={(event) => {
                event.preventDefault();
                saveProject({ variables: { name, recipient }});
            }}>
            <h1 className="title">Add a new project</h1>
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
                className="button is-primary"
                type="submit"
            >
                Add
            </button> 
        </form>
    );
}

export default NewProjectForm;