import React, { useState } from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const SAVE_NEW_PROJECT = gql`
    mutation saveProject($name: String!, $recipient: String) {
      saveProject(name:$name, recipient: $recipient)
    }
`

// const onModalClick = (saveProject) => {

// }

const NewProjectButton = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [saveProject] = useMutation(SAVE_NEW_PROJECT,
        {
            onCompleted() {
                setIsModalActive(false);
            }
    });


    const project = {
        name: "A very fancy project",
        recipient: "someone extra special"
    }

    return (
        <>
            <button 
                className="button is-primary"
                onClick={() => { setIsModalActive(true)}}
            >
                Add new project
            </button> 
            <aside className={ ( isModalActive ? "is-active ": "") + "modal"}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <form 
                        className="box"
                        onSubmit={(event) => {
                            event.preventDefault();
                            saveProject({ variables: project });
                        }}>
                        <h1 className="title">Add a new project</h1>
                        <div className="field">
                            <div className="control">
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Name of your project" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Who's it for?" />
                            </div>
                        </div>
                        <button 
                            className="button is-primary"
                            type="submit"
                        >
                            Add
                        </button> 
                    </form>
                    <button 
                        aria-label="close"
                        className="modal-close is-large"
                        onClick={() => { setIsModalActive(false); }} ></button>
                </div>
            </aside>
        </>
    )
}

export default NewProjectButton;